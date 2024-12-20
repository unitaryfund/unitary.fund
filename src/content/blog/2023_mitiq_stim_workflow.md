---
title: Upgrading error mitigation to the fault tolerant regime with Mitiq (and a Stim tutorial)
author: Misty Wahl
day: 14
month: 9
year: 2023
tags:
- Mitiq
---


In Mitiq v0.29.0 we added a [tutorial demonstrating a method of combining quantum error mitigation (QEM) and quantum error correction (QEC)](https://mitiq.readthedocs.io/en/stable/examples/zne_logical_rb_cirq_stim.html).
While QEM and QEC are typically thought of as separate approaches to dealing with errors in quantum computations, recently it has been shown that techniques such as zero noise extrapolation (ZNE) and probabilistic error cancellation can also benefit applications in fault-tolerant quantum computing [^1][^2][^3].
In this example, ZNE is applied with noise scaling by global unitary folding on logical randomized benchmarking (RB) circuits, and the use of Mitiq with the Stim stabilizer simulator as the backend is introduced.

## About Mitiq
[Mitiq](https://unitary.foundation/research/mitiq/) is the leading quantum error mitigation compiler, with over 100k downloads.
Because quantum computers have high error rates, compiling for error robustness is critical for useful applications [4].
Mitiq is an open source project developed by the Unitary Foundation technical team, along with a community of over 50 contributors worldwide.
For more information, see the [Mitiq documentation](https://mitiq.readthedocs.io/en/stable/).

## About Stim
Stim is a quantum stabilizer circuit simulation package, specialized for the simulation of quantum error correction (QEC) circuits.
It can be used as a Python package, a command line tool, or a C++ library.
More information can be found on the [Stim project page](https://github.com/quantumlib/Stim). 

More information about the Mitiq and Stim workflow can be found in the [tutorial](https://mitiq.readthedocs.io/en/stable/examples/zne_logical_rb_cirq_stim.html).

## A Mitiq + Stim tutorial for applying error mitigation on logical circuits

<div style="text-align: center;">
    <img src="https://res.cloudinary.com/dcz4ywuer/image/upload/v1694724821/uihac8qtevmlkgrzvfyl.png" 
    alt="Mitiq and Stim logos" 
    width=500px 
    height=auto />
</div>


The idea for a tutorial with Stim was first inspired by a comment regarding Ref. [3] from a community member on [SciRate](https://scirate.com/) (also an open access scientific platform!), suggesting the use of deeper circuits on the numerical example demonstrating a novel noise scaling technique proposed in the paper. 
The team agreed with the suggestion and quickly determined that a performant stabilizer simulator was necessary to run the deeper circuit simulations.
Of the stabilizer simulators tested, Stim was the one that could execute all necessary simulations within the time constraints of the project.
Furthermore, we were able to demonstrate ZNE effectively mitigating errors on the deeper logical RB circuits as well, strengthening the case for ZNE on logical circuits.

## Quantum community impact
Ultimately, the [research code](https://github.com/unitaryfund/research/tree/main/ds_zne) for simulating logical circuits on the Stim backend and applying ZNE with Mitiq was reused and streamlined into a tutorial in the gallery of [examples](https://mitiq.readthedocs.io/en/stable/examples/examples.html) in the Mitiq documentation.
In addition to the positive results, the project became an encouraging case study for open science and the use of constructive community feedback in refining scientific work.
It also motivated a new connection between two powerful open quantum software tools, Mitiq and Stim, paving the way for future demonstrations combining QEM and QEC to minimize the effect of errors in quantum computations.

 [^1]: Christophe Piveteau, David Sutter, Sergey Bravyi, Jay M. Gambetta, and Kristan Temme. Error mitigation for universal gates on encoded qubits. Phys. Rev. Lett., 127:200505, (2021). URL: https://link.aps.org/doi/10.1103/PhysRevLett.127.200505, doi:10.1103/PhysRevLett.127.200505.

 [^2]: Yasunari Suzuki, Suguru Endo, Keisuke Fujii, and Yuuki Tokunaga. Quantum error mitigation as a universal error reduction technique: applications from the nisq to the fault-tolerant quantum computing eras. PRX Quantum, 3:010345, (2022). URL: https://link.aps.org/doi/10.1103/PRXQuantum.3.010345, doi:10.1103/PRXQuantum.3.010345.

 [^3]: Misty A. Wahl, Andrea Mari, Nathan Shammah, William J. Zeng, and Gokul Subramanian Ravi. Zero noise extrapolation on logical qubits by scaling the error correction code distance. (2023). arXiv:2304.14985.

 [^4]: Will Zeng and Nathan Shammah, Making quantum error mitigation practical, 2023. URL: https://unitary.foundation/posts/2023_qem/
