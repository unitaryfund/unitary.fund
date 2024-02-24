---
title: Adding Qibo as a new supported frontend for Mitiq
author: Francesc Sabater
day: 24
month: 2
year: 2024
---

In the latest Mitiq release [v0.34.0](https://github.com/unitaryfund/mitiq/discussions/2194), support for [Qibo](https://qibo.science/) has been announced as a newly integrated frontend. This addition expands Mitiq's list of supported frontends, formerly consisting of Cirq, Qiskit, pyQuil, Bracket, and PennyLane, to now include Qibo.

## Qibo, the newest frontend supported by Mitiq
Qibo is an end-to-end open source platform for quantum simulation, self-hosted quantum hardware control, calibration and characterization. 
Some of the key features of Qibo, as higlighted in its [GitHub](https://github.com/qiboteam/qibo) page, include:
- Definition of a standard language for the construction and execution of quantum circuits with device agnostic approach to simulation and quantum hardware control based on plug and play backend drivers.
- A continuously growing code-base of quantum algorithms applications presented with examples and tutorials.
- Efficient simulation backends with GPU, multi-GPU and CPU with multi-threading support.
- Simple mechanism for the implementation of new simulation and hardware backend drivers.

Additionally, Qibo is a fully collaborative and open-source project, as anyone can contribute to its development. Qibo is actively utilized on real quantum computers; for example, it serves as the frontend for the recently deployed quantum computer at the Barcelona Supercomputing Center [BSC-CNS](https://www.bsc.es/). More detailed information regarding the features and performance of Qibo can be found in the Qibo white paper [^1].

## A quick tutorial on using Qibo alongside Mitiq 

### Setup: Defining a circuit

For simplicity, we will use a single-qubit circuit with ten Pauli $X$ gates that compiles to the identity, defined below.

```python 
from qibo import Circuit,gates

c = Circuit(1) 
for _ in range(10): 
    c.add(gates.X(0))
c.add(gates.M(0))
```

In this example, we will use the probability of obtaining the $|0\rangle$ state as our observable to mitigate, the expectation value of which should evaluate to one in the noiseless setting.

### Setup: Defining the executor 

We define the executor function in the following code block. In the executor, we create a noise map and apply it to the circuit. Finally we simulate the noisy circuit and obtain the desired observable as output of the executor function. For more detailed information about the noise map features see [Qibo noisy simulation](<https://qibo.science/qibo/stable/code-examples/advancedexamples.html#adding-noise-after-every-gate>).  

```python
def executor(circuit, shots = 1000):
    """Returns the expectation value to be mitigated. 
    In this case the expectation value is the probability to get the |0> state. 

    Args:
        circuit: Circuit to run.
        shots: Number of times to execute the circuit to compute the expectation value.
    """
    # Apply noisy map (simulate noisy backend)
    noise_map = {0: list(zip(["X", "Z"], [0.03, 0.03]))}
    noisy_c = circuit.with_pauli_noise(noise_map)
    
    result = noisy_c(nshots=shots)
    result_freq = result.frequencies(binary=True)
    counts_0 = result_freq.get(0)
    if counts_0 is None:
        expectation_value = 0.
    else:
        expectation_value = counts_0 / shots  
    return expectation_value
```

### Applying ZNE

We can now test the mitigated version of the circuit against the unmitigated one to ensure it is working as expected. We apply ZNE using 
as scale factors 1, 2 and 3 and using RichardsonFactory. For each scaling factor we average over three circuits. 

```python
from mitiq import zne
from mitiq.zne.inference import RichardsonFactory

unmitigated = executor(c) 
print(f"Unmitigated result {unmitigated:.3f}")
scale_factors = [1.0,2.0,3.0]
factory = RichardsonFactory(scale_factors=scale_factors) #default ZNE configuration
mitigated = zne.execute_with_zne(c, executor, factory = factory, num_to_average = 3)
print(f"Mitigated result {mitigated:.3f}")
```
The mitigated result is closer to the noiseless result, wich is one. 
In addition, we can show the interpolation performed: 
```python
import matplotlib.pyplot as plt
factory.plot_fit()
plt.show()
```

[^1]: S. Efthymiou, S. Ramos-Calderer, C. Bravo-Prieto, A. Pérez-Salinas, D. Garcı́a-Martı́n, A. Garcia-Saez, J. I. Latorre, S. Carrazza, Qibo: a framework for quantum simulation with hardware acceleration, Quantum Science and Technology 7 (1) (2021) 015018. doi:10.1088/2058-9565/ac39f5, [arXiv:2009.01845](https://arxiv.org/abs/2009.01845).
