---
title: Random quantum volume circuits for benchmarking
date: 31 July 2022
author: Nick Gardner
---

## About quantum volume
This past spring **I contributed a
[function](https://mitiq.readthedocs.io/en/stable/apidoc.html?highlight=volume#module-mitiq.benchmarks.quantum_volume_circuits)
to Mitiq for sampling random quantum volume circuits**. Quantum volume is
a single-number benchmark for near-term quantum computers
[proposed](https://arxiv.org/abs/1811.12926)
in 2019 by researchers at IBM (see
[here](https://pennylane.ai/qml/demos/quantum_volume.html)
for a nice overview). The **quantum volume** of a quantum computer quantifies the largest
random circuit of equal width (number of qubits) and depth (layers of gates)
which that quantum computer can successfully implement.
As a **benchmark**, it is meant to serve as a more
accurate single-number summary of the quality of a quantum computer than simpler
quantities such as the number of qubits, or average gate fidelity.
Various features of a quantum computing system jointly contribute to its quantum volume
score, including how many qubits it has, the fidelity of its operations,
and the degree of connectivity of its qubit layout.

## Random quantum volume circuits
The **random quantum circuits** used in quantum volume experiments consist of
*d* layers of the following computation performed on *d* qubits:
randomly permute all qubits, then apply random
two-qubit unitary transformations to every pair of adjacent qubits (leaving one
qubit out each time if the number of qubits is odd). Success in executing the
circuit is defined in terms of the
**[heavy output generation problem](https://arxiv.org/abs/1612.05903)**
(can the computer produce a set of output strings more than two-thirds
of which are "heavy"--have a greater than the median probability of
being generated--for that random circuit?).


## Adding quantum volume circuits to Mitiq
The functions I implemented for **[Mitiq](https://mitiq.readthedocs.io/)** generate this type of random circuit
and calculate (classically) its set of heavy output strings.

**This was my first real project in the world of quantum
computing software**, and thanks to the Mitiq team it was a great experience--I
learned a ton and am excited to work on future Mitiq projects.
Thank you especially to Andrea, Nathan, and Misty for being so welcoming and
helpful!


## About me
I am a graduate student at Stanford University interested in quantum computing,
focusing on quantum error correction. Working on a team with Nyle Wong and Zhaoyi Li, I began contributing to Mitiq in the Stanford course "Quantum Computing: Open-Source Project Experience" ([CS59SI](https://bulletin.stanford.edu/courses/2232631)).
