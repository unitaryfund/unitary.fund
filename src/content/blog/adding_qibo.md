---
title: Adding Qibo as a new supported frontend for Mitiq
author: Francesc Sabater
day: 29
month: 2
year: 2024
---

**In the latest Mitiq release, [v0.34.0](https://github.com/unitaryfund/mitiq/discussions/2194), support for [Qibo](https://qibo.science/) has been announced as a newly integrated frontend.** 

This addition expands Mitiq's list of supported frontends, formerly consisting of Cirq, Qiskit, pyQuil, Braket, and PennyLane, to now include Qibo.
![Qibo Mitiq integration.](/images/qibo-mitiq.png)

## Qibo, the newest frontend supported by Mitiq
Qibo is an end-to-end open source platform for quantum simulation, self-hosted quantum hardware control, calibration and characterization. 
Some of the key features of Qibo, as higlighted in its [GitHub](https://github.com/qiboteam/qibo) page, include:
- Definition of a standard language for the construction and execution of quantum circuits with device agnostic approach to simulation and quantum hardware control based on plug and play backend drivers.
- A continuously growing code-base of quantum algorithms applications presented with examples and tutorials.
- Efficient simulation backends with GPU, multi-GPU and CPU with multi-threading support.
- Simple mechanism for the implementation of new simulation and hardware backend drivers.

Additionally, Qibo is a fully collaborative and open-source project, as anyone can contribute to its development. Qibo is actively utilized on real quantum computers; for example, it serves as the frontend for the recently deployed quantum computer at the Barcelona Supercomputing Center [BSC-CNS](https://www.bsc.es/). More detailed information regarding the features and performance of Qibo can be found in the Qibo white paper [^1].

## Adding Qibo to Mitiq 
To carry out the contribution and make it possible for Qibo circuits to be used in Mitiq, I've had to define two main functions:
- The first one is `from_qibo`, which takes a Qibo-type circuit and converts it into a Cirq-type circuit, the type of circuit internally used by Mitiq. Converting from a Qibo circuit to a Cirq one is, in principle, quite straightforward by first converting the Qibo-type circuit to QASM, and from QASM defining the Cirq-type circuit. However, there are gates known by both Qibo and QASM that are not defined in Cirq. To deal with these gates, I've had to define an auxiliary function for each of them, where these problematic gates are decomposed into gates that are defined in Cirq. An example of this type of gate is the CRX gate.
- The other main function I've had to define is `to_qibo`. This function performs the opposite action of the previous one, converting a Cirq-type circuit into a Qibo-type circuit.

Contributing to Mitiq has truly been a rewarding journey. It has provided me with a profound understanding of the processes involved in quantum computing development and open-source contribution. I would encorage anyone who has an idea that might improve Mitiq to try and contribute. Before any contribution is made, rigorous testing ensures that every aspect functions seamlessly, so there is no reason to be afraid of messing up. Encountering failures during these tests is not uncommon; in my case some tests  failed not only on the first try but also on subsequent attempts. However, these failing tests served as a great opportunity to learn new coding techinques and work alongside the Mitiq team to resolve them. The unwavering support and guidance from the Mitiq team has been instrumental in navigating through these challenges, ensuring that the contribution succedeed. 

## A quick tutorial on using Qibo alongside Mitiq 

### Setup: Defining a circuit using Qibo

For simplicity, we will use a single-qubit circuit with ten Pauli _X_ gates that compiles to the identity, defined below.

```python 
from qibo import Circuit,gates

c = Circuit(1) 
for _ in range(10): 
    c.add(gates.X(0))
c.add(gates.M(0))
```

In this example, we will use the probability of obtaining the |0⟩ state as our observable to mitigate, the expectation value of which should evaluate to one in the noiseless setting.

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
    counts_0 = result_freq.get('0')
    if counts_0 is None:
        expectation_value = 0.
    else:
        expectation_value = counts_0 / shots  
    return expectation_value
```

### Applying Zero Noise Extrapolation

We can now test the mitigated version of the circuit against the unmitigated one to ensure it is working as expected. 

```python
from mitiq import zne

unmitigated = executor(c) 
print(f"Unmitigated result {unmitigated:.3f}")
mitigated = zne.execute_with_zne(c, executor)
print(f"Mitigated result {mitigated:.3f}")
```
Output: 
```
Unmitigated result 0.788
Mitigated result 0.967
```
The mitigated result is noticeably closer to the noiseless result compared to the result without mitigation.

## About the contribution 
This contribution to Mitiq is the outcome of my internship at the Barcelona Supercomputing Center, conducted from October 2023 to February 2024, under the guidance of Alba Cervera-Lierta. This intership was part of the [master's program in Quantum Science and Technology](https://quantummasterbarcelona.eu/) based in Barcelona.

[^1]: S. Efthymiou, S. Ramos-Calderer, C. Bravo-Prieto, A. Pérez-Salinas, D. Garcı́a-Martı́n, A. Garcia-Saez, J. I. Latorre, S. Carrazza, Qibo: a framework for quantum simulation with hardware acceleration, Quantum Science and Technology 7 (1) (2021) 015018. doi:10.1088/2058-9565/ac39f5, [arXiv:2009.01845](https://arxiv.org/abs/2009.01845).
