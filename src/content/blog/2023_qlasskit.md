---
title: Qlasskit - a powerful bridge between Python and Quantum algorithms
author: Davide Gessa
day: 29
month: 11
year: 2023
---


Traditionally, creating quantum circuits requires specialized knowledge in quantum programming. This requirement holds true when encoding a classical algorithm inside a quantum circuit, for instance, for an oracle or a black-box component of a quantum algorithm. This often becomes a time wasting job, since we almost always already have a classical implementation in a traditional high level language.

*Qlasskit*, an open-source Python library developed with the support of a Unitary Fund microgrant, addresses this challenge head-on by allowing direct translation of standard Python code into invertible quantum circuits without any modification to the original code. Furthermore, *qlasskit* implements some well-known quantum algorithms and offers a comprehensive interface for implementing new ones.

To illustrate *qlasskit*'s capabilities, we will demonstrate its use in performing a pre-image attack on a cryptographic hash function using Grover's search algorithm, obtaining a quadratic speedup compared to classical approaches. The beauty of *qlasskit* lies in its simplicity – you can write the entire software without needing to understand any concept of quantum computing.

A pre-image attack, in cryptography, targets a hash function `h(m)` with the aim to discover an original message `m` that corresponds to a specific hash value. On a traditional computer, to perform this attack without any hints, we must run `h(m)` with every possible input (`N=2**n`).

Thanks to the Grover search algorithm, we are able to find a pre-image with only `pi/2 * sqrt(N)` iterations, obtaining the quadratic speedup I mentioned before. 

We write a toy hash function `hash_simp` which operates on messages composed of two 4 bit values and uses bitwise xor to create an 8 bit hash value. 

::image[bdlrh02mvoob68sdpg83]

The first things you can notice in this code are:

- the `qlassf` decorators, indicating that the function will be translated to a quantum circuit.
- special bit-sized types Qlist, Qint4, and Qint8. These are required as qubits are a precious resource, and we want to use as few as possible.
- and, it is normal Python code.

To see the resulting quantum circuit we can export and draw in qiskit:

::image[m47jigwhhbpzgetmpor7]

And this is the resulting circuit, produced by the *qlasskit* internal compiler:

::image[v09kwrhkls2lncjx2x2d]

Thanks to the fact that *qlasskit* function are standard Python functions, we can call the `original_f` to perform some kind of analysis and test on the hash function. Since the input space is tiny (it is a toy hash function), we can check if the hash function is uniform (if it maps equally to the output space).

::image[c1kma7gntkz3ku27ydzc]

::image[kscxnfp7clbjiu0suja0]

We got that `hash_simp` is following an uniform distribution.


Now we use our quantum function as an oracle for a Grover search, in order to find which input maps to the value `0xca`.

::image[iuftocskxxqn2wbpzcik]


Then we use our preferred framework and simulator for sampling the result; this is an example using `qiskit` with `aer_simulator`.

::image[w2ikly26ebyfteracjnt]

And this is the result of the simulation, where we can see that the pre-image that leads to `h(x) = 0xca` is the list `[12,12]`.

::image[de2y6kbgcdaljnc8tsrc]

Using `QlassF.original_f` we can double check the result without invoking a quantum simulator; calling it with the list `[12,12]` must result in the hash value `0xca`.

::image[sxukfgmiphudgsjgfsca]
::image[dq93f0qhakbgrbpam0p8]

Although *qlasskit* can handle hundreds of qubits, in this post we use a toy hash function because currently, we lack a simulator or quantum computer capable of handling hundreds of qubits. Using these same tools, in the near future we may be able to perform a Grover search on real hash functions like `md5` or `sha2`.

A special thanks to the [Unitary Fund](https://unitary.fund/) that funded this idea. If you have any questions or comments, feel free to reach out to me on twitter [dagide](https://twitter.com/dagide), linkedin [Davide Gessa](https://linkedin.com/in/davide-gessa-71798b80) and medium [@dakk](https://medium.com/@dakk).


Useful Links:

- [Qlasskit library on github](https://github.com/dakk/qlasskit)
- [Qlasskit docs](https://dakk.github.io/qlasskit)
- [How qlasskit works](https://dakk.github.io/qlasskit/how_it_works.html)
