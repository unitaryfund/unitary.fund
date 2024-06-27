---
title: An Introduction to GA-QAS
author: Vu Tuan Hai
day: 21
month: 5
year: 2024
tags:
  - quantum architecture search
  - python
  - qiskit
  - genetic-algorithm
---

In various quantum optimization problems, choosing the right ansatz is a critical point that will affect the accuracy of the result. Many template ansatzes have been proposed, such as Graph Ansatz and EffecientSU2, … but they are limited in their applicability. Hence, we've created a search engine called **GA-QAS** (Genetic Algorithm for Quantum Architecture Search) to aid in the discovery of the right ansatz. In this post, we will guide you on how to use it efficiently.

Required packages:

- qiskit 1.0+
- matplotlib
- tdqm

## Now, let’s start!

# Step 1. Define problem (W state preparation)

<figure>
    <img src='/public/images/ga-qas/ga-qas1.png' width="600" style="margin: auto" alt='description' />
    <figcaption>
    Fig 1. (a) State preparation scheme based on quantum compilation technique, where U, V are ansatz and state that need to prepare[1][2]. (b) Some default ansatz, such as hyper-graph.
    </figcaption>
</figure>

In this post, we will use a Python package named <a href="https://github.com/vutuanhai237/qoop">$\langle \mathrm{qo}|\mathrm{op} \rangle$</a>, which is a core package for developing quantum circuit optimization frameworks.
You can download it via `git` as:

```
git clone https://github.com/vutuanhai237/qoop.git
```

Note that you should put it on the same level as your Python/Jupyter Notebook file. The best is:

```
folder_name
│   your_python_file.py
|   your_jupyter_file.ipynb
└───qoop
│   └───evolution
│       │   environment.py
│       │   cross_over.py
│       │   ...
```

First, we define the problem, take example quantum state preparation, more easier W state preparation. 3-qubit W state is defined as:

$$
|W_3\rangle=V|000\rangle=\frac{1}{\sqrt{3}}(|001\rangle+|010\rangle+|100\rangle)
$$

And so on for a larger number of qubits. If we want to prepare such a state, we will need to care about the unitary operator $V$, but in some cases, $V$ requires large resources (such as large depth and number of gates). Then, we want to find another unitary $U(\theta)$ that is "equal" to V, $U(\theta)$ requires fewer resources than $V$ but consumes an initial to optimize $\theta$. The problem comes from here: the structure of $U$, or ansatz $U$, affects how "hard" and "large" this optimization process is.

You can try to prepare 3-qubit W state by using $\langle qo|op \rangle$, a wiki can be found [here](https://github.com/vutuanhai237/qoop/wiki/Advance:-Custom-state-preparation):

```py
from qoop.compilation.qsp import QuantumStatePreparation
from qoop.core import ansatz, state

compiler = QuantumStatePreparation(
    u = ansatz.g2(num_qubits = 3, num_layers = 1)
    target_state = state.w(num_qubits = 3).inverse()
).fit(num_steps = 100) # Define the optimization process and begin to optimize in 100 iterations
compiler.plot() # Plot optimization process
```

**Make sure** that you can run the above code. We wrap it into a function $f: U \rightarrow \mathbb{R}$, the return value of this function is the (1 - cost value) of the optimization process, which means near 1 is good.

```py
import qiskit
def fitnessW(qc: qiskit.QuantumCircuit):
    qsp = QuantumStatePreparation(
        u = qc,
        target_state = state.w(num_qubits = 3).inverse()
    ).fit()
    return 1 - qsp.compiler.metrics['loss_fubini_study'][-1] # Fitness value
```

# Step 2. Configuration for genetic algorithm

<figure>
    <img src='/public/images/ga-qas/ga-qas2.png' style="margin: auto" alt='description' />
    <figcaption>Fig 2. The general pipeline of GA-QAS</figcaption>
</figure>

A genetic algorithm (GA) is a heuristic algorithm based on a genetic combination process. GA processes include Fitness evaluation, Selection, Cross-over, and Mutation. We treat ansatz as an individual in the population (where gates are its genes).

|        Process        |                                                                                                     Method                                                                                                      |
| :-------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Population generation |                                                A $n$ ansatz is initialized from a pool gate (Clifford$+R_i+CR_i, i\in\{x,y,z\}$) with certain provided metadata                                                 |
|  Fitness evaluation   |                                                                             Evaluate each ansatz by calling `fitness_func(ansatz)`                                                                              |
|       Selection       |                                                    Get fitness value from the fitness evaluation; simply sort from high to low and take the first half part                                                     |
|      Cross-over       | Divide two ansatz $qc_1$ and $qc_2$ into four parts $\{qc_{11}, qc_{12}, qc_{21}, qc_{22}\}$, then combine each two parts into two new ansatz $qc_1^*=qc_{11}\vert qc_{22}$ and $qc_2^{*}=qc_{12}\vert qc_{21}$ |
|       Mutation        |                                              Each gate on ansatz has a small probability of mutating to another gate (with the same number of qubits) in the pool                                               |

_**Tab 1**. Detail of each operation in GA-QAS._

The overall process can be viewed in _Fig. 2_.

In GA, some hyper-parameters need to be considered and defined before you run GA-QAS:

```py
from qoop.evolution.environment import EEnvironmentMetadata
env_metadata = EEnvironmentMetadata(
        num_qubits, # As its name
        depth, # Ansatz depth you want
        num_circuit, # Number of ansatz per generation
        num_generation, # Number of generation/iteration for GA
        prob_mutate # Mutation probability, usually as small as 0.01 (1%)
)
```

Then, you need to create an `EEnvironment` object, the important parameter is `fitness_func`, which is the function name that we declared above:

```py
from qoop.evolution.environment import EEnvironment
env = EEnvironment(
     metadata = env_metadata,
     fitness_func = fitnessW,
)
```

The object `EEnvironment` has other parameters such as `selection_func`, `crossover_func`, `mutate_func`, `threshold_func` which can be imported from below sub-module:

```py
from qoop.evolution import crossover, mutate, selection, threshold
```

or defined by yourself.

|   Parrameter   |             Default             |                                                        Function type                                                         |
| :------------: | :-----------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
| selection_func |   selection.elitist_selection   |                 $f$: [qiskit.QuantumCircuit] $\times$ $\mathbb{R}^{N}$ $\rightarrow$ [qiskit.QuantumCircuit]                 |
| crossover_func |  crossover.onepoint_crossover   | $f$: qiskit.QuantumCircuit $\times$ qiskit.QuantumCircuit $\rightarrow$ qiskit.QuantumCircuit $\times$ qiskit.QuantumCircuit |
|  mutate_func   |     mutate.layerflip_mutate     |                                $f$: qiskit.QuantumCircuit $\rightarrow$ qiskit.QuantumCircuit                                |
| threshold_func | threshold.compilation_threshold |                                             $f$: $\mathbb{R} \rightarrow$ {0,1}                                              |

_**Table 2**: Parameter functions for GA-QAS._

# Step 3. Run GA-QAS

You can call the method `evol()` to start running GA-QAS.

```py
env.evol(
   verbose = 1,
   auto_save = True
)
```

There are only two parameters: the first is verbose (1 means print % process, 0 means no print), and the second is the saving option.
The saving result's folder is detailed on [GA-QAS: folder result](https://github.com/vutuanhai237/qoop/wiki/GA%E2%80%90QAS:-folder-result).

# Step 4. Plot result

Currently, we support plotting fitness values against a number of generations. In the future, we will develop more presentation plots.

```py
env.plot()
```

<figure>
    <img src='/public/images/ga-qas/ga-qas3.png' style="margin: auto" alt='description' />
    <figcaption>Fig 3. Fitness values versus number of generations</figcaption>
</figure>

The result is saved in a folder; the default folder name is based on the fitness function name. We care about a file named `best_circuit.qpy`, which is our final solution. Then, we can load it by $\langle qo|op\rangle$ and put it into fitness again to test:

```py
from qoop.backend import utilities
best_circuit = utilities.load_circuit("Path to best_circuit.qpy")
fitness_value = fitnessW(best_circuit)
```

# Conclusion

In this post, we have introduced a way to use GA-QAS, just define your own problem (fitness function) and it will help you find best ansatz automatically. For more information and documentation, explore the following links:

- $\langle qo|op\rangle$: core package for GA-QAS.
  - [Github](https://github.com/vutuanhai237/qoop)
  - [Wiki](https://github.com/vutuanhai237/qoop/wiki)
  - [Paper](https://doi.org/10.1016/j.softx.2024.101726)
- GA-QAS:
  - Paper: Coming soon.
  - [Wiki](https://github.com/vutuanhai237/qoop/wiki/GA%E2%80%90QAS:-folder-result): Load folder result and continue to evol()
  - [Wiki](https://github.com/vutuanhai237/qoop/wiki/GA%E2%80%90QAS:-Full-pipeline): Full pipeline.

Thanks for reading! Please do not hesitate to ask us any questions via e-mail: vutuanhai237@gmail.com or [LinkedIn](https://www.linkedin.com/in/vutuanhai237/).

# References

[1] Hai, V. T., Viet, N. T., & Ho, L. B. (2023). Variational preparation of entangled states on quantum computers. arXiv preprint arXiv:2306.17422.

[2] Khatri, S., LaRose, R., Poremba, A., Cincio, L., Sornborger, A. T., & Coles, P. J. (2019). Quantum-assisted quantum compiling. Quantum, 3, 140.

# Appendix: Full code

The Jupyter notebook which contains the above code can be found [here](https://github.com/vutuanhai237/GA-QAS/blob/694ff6a509df9acc7d3e8053ab89ccfd7d3127c0/example/w_preparation.ipynb)

```py
import qiskit
from qoop.core import state, metric, ansatz
from qoop.compilation.qsp import QuantumStatePreparation
from qoop.evolution.environment import EEnvironmentMetadata
from qoop.evolution.environment import EEnvironment

def fitnessW(qc: qiskit.QuantumCircuit):
    qsp = QuantumStatePreparation(
        u = qc,
        target_state = state.w(num_qubits = 3).inverse()
    ).fit(num_steps = 100)
    return 1 - qsp.compiler.metrics['loss_fubini_study'][-1] # Fitness value

env_metadata = EEnvironmentMetadata(
    num_qubits = 3, # As its name
    depth = 4, # Ansatz depth you want
    num_circuit = 4, # Number of ansatz per generation
    num_generation = 10, # Number of generation/iteration for GA
    prob_mutate = 0.01 # Mutation probability, usually as small as 0.01 (1%)
)

env = EEnvironment(
    metadata = env_metadata,
    fitness_func = fitnessW,
).evol()
```
