---
title: Combining Circuit Compilation and Error Mitigation
author: Unitary Fund Team
day: 3
month: 10
year: 2022
---

<img src="/images/bqskit.png" alt="BQSKit and Mitiq logo in tandom" width="400"/>

**Quantum circuit compilation** is a task that has become ubiquitous in today's quantum programming landscape.
Just as a classical program compiler takes programs specified at a high-level of abstraction and brings them down to a lower level that hardware can "understand", a quantum compiler converts abstract programs to a set of instructions amenable to a quantum processing unit's (QPU) constraints.
Within the currently most common formalism of quantum programs as composed of "quantum circuits" (a series of gate operations on qubits), a compiler needs to transform the original quantum circuit by taking into account the QPU's characteristics, such as the native gate set (what gates can be implemented) and the processor topology (which qubits interacts with other qubits).
This is an extremely important part of what is a full quantum stack, and is an active area of research how best to compile quantum circuits, e.g., by optimizing the depth of the quantum circuit or the frequency of a two-qubit gate, in order to reduce the impact of noise on the computation.

**Error mitigation** is a collection of techniques used to improve the performance of near-term quantum computers.
While we hope one day to run error corrected codes that find and fix errors as they occur, current machines are not large enough, nor reliable enough for this task to be applied at scale.
To this end error mitigation can make the computation of existing quantum computers more accurate and is believed to be a necessary stack also in the near term.

Both circuit compilation and error mitigation are increasingly important in building a full stack experience for near-term quantum computers, and hence it's important to understand how these two technologies interact.
For this purpose, the Unitary Fund technical staff, working on the [Mitiq](https://mitiq.readthedocs.io/en/latest/index.html) error mitigation toolkit, teamed up with the team at Lawrence Berkeley National Laboratory who is developing the Berkeley Quantum Synthesis Toolkit---often written [BQSKit](https://bqskit.lbl.gov/) for short---which is a compiler aimed at reducing circuit depth by reducing CNOT gate count.
In the BQSKit team's research, they have been able to show their compiler reduces CNOT gate count up to 80% for specific quantum algorithms [1].

To begin to understand this tool's interplay with [Mitiq](https://mitiq.readthedocs.io/) we have written a tutorial which can be found in our [documentation](https://mitiq.readthedocs.io/en/latest/examples/bqskit.html) that describes a workflow of using the BQSKit compiler together with Zero-Noise Extrapolation, one of the quantum error mitigation techniques available through Mitiq.
The tutorial demonstrates how the two packages work in tandem by generating random circuits and comparing the accuracy of error mitigation on pre and post-compiled circuits.
This example was also discussed in the BQSkit tutorial given by Ed Younis and Costin Iancu at IEEE Quantum Week.

The tutorial was written before the 1.0.0 release of BQSKit which includes many improvements that we are working to support and incorporate soon.
Check back for an updated tutorial and more results on the interaction of these two tools!

### Links

- [BQSKit website](https://bqskit.lbl.gov/)
- [BQSKit documentation](https://bqskit.readthedocs.io/)
- [Mitiq documentation](https://mitiq.readthedocs.io/)
- [BQSKit & Mitiq tutorial](https://mitiq.readthedocs.io/en/latest/examples/bqskit.html)

### References
**[1]** Patel *et al.*, [Proceedings of the 27th ACM International Conference on Architectural Support for Programming Languages and Operating Systems](https://doi.org/10.1145/3503222.3507739) (2022).