---
title: ZNE on logical circuits with Mitiq and the Stim backend 
author: Misty Wahl
day: 14
month: 9
year: 2023
---


In Mitiq v0.29.0 we added a [tutorial demonstrating a method of combining quantum error mitigation (QEM) and quantum error correction (QEC)](https://mitiq.readthedocs.io/en/stable/examples/zne_logical_rb_cirq_stim.html), with the goal of reducing the effective logical error rate of the computation.
While QEM techniques such as zero noise extrapolation (ZNE) and probabilistic error cancellation are typically thought of as belonging to the NISQ regime, recently it has been shown that they can also benefit applications within the fault-tolerant regime [^1][^2][^3].
In this example ZNE is applied with noise scaling by global unitary folding on logical randomized benchmarking (RB) circuits, and the use of Mitiq with the Stim stabilizer simulator as the backend is introduced.

## About Mitiq
[Mitiq](https://mitiq.readthedocs.io/en/latest/) is a compiler that makes programs more robust to errors in quantum computers.
Because quantum computers have high error rates, compiling for error robustness is critical for useful applications.
Mitiq is the leading quantum error mitigation compiler and has recently hit 100k downloads and is developed by a community of over 50 contributors worldwide.

## About Stim
Stim is a quantum stabilizer circuit simulation package, specialized for the simulation of quantum error correction (QEC) circuits.
It can be used as a Python package, a command line tool, or a C++ library.
More information can be found on the [Stim project page](https://github.com/quantumlib/Stim). 

Although Mitiq does not support Stim directly as a frontend, it can interface with the Stim backend through the Cirq and Stimcirq packages. Stimcirq is a library for translating between Cirq and Stim.

## A Mitiq + Stim tutorial for applying error mitigation on logical circuits

::image[uihac8qtevmlkgrzvfyl]

The idea for a tutorial with Stim was first inspired by a comment from a community member on the arXiv pre-print of Ref. [3], suggesting the use of deeper circuits on the numerical example demonstrating a novel noise scaling technique proposed in the paper. 
The team agreed with the suggestion and quickly determined that a performant stabilizer simulator was necessary to run the deeper circuit simulations.
Of the stabilizer simulators tested, Stim was the one that could execute all necessary simulations within the time constraints of the project.
Furthermore, we were able to demonstrate ZNE effectively mitigating errors on the deeper logical RB circuits as well, strengthening the case for ZNE on logical circuits.
Ultimately, the [research code](https://github.com/unitaryfund/research/tree/main/ds_zne) for simulating logical circuits on the Stim backend and applying ZNE with Mitiq was reused and streamlined into a tutorial in the gallery of [examples](https://mitiq.readthedocs.io/en/stable/examples/examples.html) in the Mitiq documentation.
In addition to the positive results, this project became an encouraging case study for open science and the use of constructive community feedback in refining scientific work and motivated a new connection between two powerful open quantum software tools, Mitiq and Stim.

 [^1]: Christophe Piveteau, David Sutter, Sergey Bravyi, Jay M. Gambetta, and Kristan Temme. Error mitigation for universal gates on encoded qubits. Phys. Rev. Lett., 127:200505, (2021). URL: https://link.aps.org/doi/10.1103/PhysRevLett.127.200505, doi:10.1103/PhysRevLett.127.200505.

 [^2]: Yasunari Suzuki, Suguru Endo, Keisuke Fujii, and Yuuki Tokunaga. Quantum error mitigation as a universal error reduction technique: applications from the nisq to the fault-tolerant quantum computing eras. PRX Quantum, 3:010345, (2022). URL: https://link.aps.org/doi/10.1103/PRXQuantum.3.010345, doi:10.1103/PRXQuantum.3.010345.

 [^3]: Misty A. Wahl, Andrea Mari, Nathan Shammah, William J. Zeng, and Gokul Subramanian Ravi. Zero noise extrapolation on logical qubits by scaling the error correction code distance. (2023). arXiv:2304.14985.