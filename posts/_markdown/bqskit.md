---
title: Combining Circuit Compilation and Error Mitigation
date: 3 October 2022
author: Unitary Fund Team
---

**Quantum circuit compilation** is a tool that has become ubiquitous in todays quantum programming landscape.
Just as a classical program compiler takes programs specified at a high-level of abstraction and brings them down to a lower level that hardware can understand, a quantum circuit compiler converts abstract circuits to circuits amenable to a QPU's native gate set and topology.
It's an extremely important part of what is a full quantum stack, and is an active area of research how best to compile circuits.

**Error mitigation** is a collection of techniques used to improve the performance of near-term quantum computers.
While we hope one day to run error corrected codes that find and fix errors as they occur, current machines are not large enough, nor reliable enough for this task.
To this end error mitigation makes existing quantum computers useful in the near term.

Both circuit compilation and error mitigation have been vital in building a full stack experience for near-term quantum computers, and hence it's important to understand how these two technologies interact.
While many compilers exist, we chose to work with the team at Lawrence Berkeley National Laboratory who is developing the Berkeley Quantum Synthesis Toolkit---often written BQSKit for short---which is a compiler aimed at reducing circuit depth by reducing CNOT gate count.
In the BQSKit team's research, they have been able to show their compiler reduces CNOT gate count up to 80% for specific quantum algorithms [1].

To begin to understand this tools interplay with [`Mitiq`](https://mitiq.readthedocs.io/) we wrote a tutorial which can be found in our [documentation](https://mitiq.readthedocs.io/en/latest/examples/bqskit.html) that describes a workflow of using the BQSKit compiler together with Zero-Noise Extrapolation provided through Mitiq.
The tutorial demonstrates how the two packages work in tandem by generating random circuits and comparing the accuracy of error mitigation on pre and post-compiled circuits.

The tutorial was written before the 1.0.0 release of BQSKit which includes many improvements that we are working to support and incorporate soon.
Check back for an updated tutorial and more results on the interaction of these two tools!

### Links

- [BQSKit website](https://bqskit.lbl.gov/)
- [BQSKit documentation](https://bqskit.readthedocs.io/)
- [Mitiq documentation](https://mitiq.readthedocs.io/)
- [BQSKit & Mitiq tutorial](https://mitiq.readthedocs.io/en/latest/examples/bqskit.html)

### References
**[1]** Patel *et al.*, [Proceedings of the 27th ACM International Conference on Architectural Support for Programming Languages and Operating Systems](https://doi.org/10.1145/3503222.3507739) (2022).