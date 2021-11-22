---
title: Improving VQA Performance through Error Mitigation
date: 27 October 2021
author: Danny Samuel
---
## About Me

I am a senior in high school with a great interest in Quantum Computing. I was able to learn about it by taking QubitxQubit’s Introduction to Quantum Computing course last year.

## Project Background

The originally proposed purpose of this project was to improve Variational Quantum Algorithm (VQA) performance using error mitigation. VQAs use parametrized quantum circuits and a classical optimizer to minimize a cost function. VQAs have the potential to effectively address the constraints of near-term Quantum Computers, but noise poses a challenge to the effectiveness of VQAs.

However, error mitigation strategies could solve some of the problems associated with noise in VQAs. In this project, I used the error mitigation strategies offered by [Mitiq](https//mitiq.readthedocs.io/en/stable/guide/guide-overview.html) to assess their effect on VQAs.

## Mitiq Overview

[Mitiq](https://github.com/unitaryfund/mitiq) is a platform agnostic error mitigation software library with three built in error mitigation methods: zero noise extrapolation, probabilistic error cancellation, and clifford data regression. Through the course of this project, I worked with the Mitiq team and contributed to the documentation and benchmarking techniques (more on that later).

## My Experience with Mitiq

My experience with Mitiq as a user has been quite positive. With extensive [documentation](https://mitiq.readthedocs.io/en/stable/) and an intuitive interface, Mitiq has proven to be very user friendly even for those with little experience with error mitigation such as myself. Additionally, Mitiq is constantly being updated with new features and examples.

But, what’s more impressive is my experience with Mitiq as a contributor. Mitiq has a very knowledgeable and helpful team that is always ready to review pull requests and help contributors out with any issues they have. Additionally, the Mitiq team also has weekly community meetings for Mitiq where anyone can join and ask questions about Mitiq, pose new ideas, and have discussions about how to best improve Mitiq. It’s this attitude of inviting a variety of opinions to the development of Mitiq that allows it to be constantly improving very quickly.

## Mirror Circuits

Although I began my project by looking at the effect of error mitigation on VQAs, it quickly became apparent that there was a lack of benchmarking methods available to measure the effectiveness of quantum processors with and without error mitigation. This is why a large amount of my time on this project was spent working on implementing the Randomized Mirror Circuits benchmarking method as presented in [this paper](https://arxiv.org/abs/2008.11294).

Mirror Circuits use a similar principle to [Loschmidt echo circuits](https://quantumai.google/cirq/tutorials/google/echoes), which are circuits that have the form $UU^\dag$. This is useful because the circuit should yield the 0 bitstring 100% of the time barring any errors, meaning we can use it to measure the error rate of a quantum processor.

However, there are multiple problems that inhibit the effectiveness of Loschmidt echo circuits, the first of which being systematic error cancellation. The simplest example of this would be if there is an error that makes $R_x(\pi/2)$ applied to a qubit actually apply $R_x(\pi/2 + \epsilon)$. The inverse of this gate would then be $R_x (\pi/2 - \epsilon)$ and the resulting bitstring would still be 0 in spite of the error. Another limitation of Loschmidt echo circuits is that a single input state is used, so errors not impacting that single state are not accounted for. Finally, only one measurement basis is used so errors that are not apparent in that one measurement basis are not accounted for.

It’s these limitations with Loschmidt echo circuits that prompted the creation of the Mirror Circuits benchmarking method. Mirror Circuits take the Loschmidt echo circuits and use key changes to it to avoid the aforementioned problems with them. For these purposes, it’s best to think of the echo circuit as a series of Clifford layers followed by the inverses of each of these layers. To reduce the chances of systematic error cancellation, we insert a central random pauli layer and insert random pauli layers between each layer. Additionally, we add a layer of random single-qubit Clifford gates to the beginning of the circuit, and the inverse of that layer to the end of the circuit to avoid the problems involving preparing and measuring in only one basis. After these changes, we are left with this:

![An example of a simple, single layer randomized mirror circuit](../images/mitiq_vqe_performance.png "An example of a simple, single layer randomized mirror circuit")

This is an example of a simple, single layer randomized mirror circuit. The nice thing about randomized mirror circuits is it still only has one possible output making it easy to use for benchmarking quantum processors, while minimizing the problems present in Loschmidt echo circuits.

I implemented a function in Mitiq (code [here](https://github.com/unitaryfund/mitiq/blob/master/mitiq/benchmarks/mirror_circuits.py)) to generate these randomized mirror circuits for any provided computer architecture. Through conversions, users can easily get mirror circuits in any existing package supported by Mitiq, for example Cirq, Qiskit, pyQuil, Pennylane, and the Amazon Braket SDK. This function provides another benchmarking circuit to easily test error mitigation methods in Mitiq. For example, the Mitiq team has already used mirror circuits to benchmark zero-noise extrapolation on Rigetti devices through AWS ([blogpost](https://aws.amazon.com/blogs/quantum-computing/exploring-quantum-error-mitigation-with-mitiq-and-amazon-braket/), [notebook](https://mitiq.readthedocs.io/en/stable/examples/braket_mirror_circuit.html#define-the-circuit)).

## Other Works

Although the Mirror Circuits implementation was the main result of my research, I also recently spent time reading [this paper](https://arxiv.org/abs/2109.01051) on the effects of error mitigation on VQA trainability. It seemed to have some insight about the error mitigation methods used in Mitiq so I gave a presentation on this paper to the Mitiq team recently. The slides for the presentation can be seen [here](https://docs.google.com/presentation/d/1TOmk3kmrJ73poMeIj8pONTaglqM0DlvaPtnqyO76CQw/edit?usp=sharing). Although the paper was largely theoretical it emphasized the difficulty of VQA trainability in the presence of noise even with error mitigation. However, it showed that Clifford Data Regression, one of the Error Mitigation methods in Mitiq, appears to have a promising effect on VQA trainability.

## Final Thoughts

I have learned very much about Error Mitigation throughout the course of this project while being able to contribute to Mitiq and the field as a whole. I want to thank the Unitary Fund team for their continued help and support. I’d especially like to thank Ryan LaRose for being my advisor throughout this project and consistently guiding me and providing advice.
