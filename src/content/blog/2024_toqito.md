---
title: "toqito: Quantum Information Science Impact through Open Source"
author: Vincent Russo and Purva Thakre
day: 8
month: 10
year: 2024
tags:
    - python
    - toqito
    - microgrant
    - qis
---

![](/images/toqito_logo.png)

## The Origins of toqito
In early 2020, the humble [initial
commit](https://github.com/vprusso/toqito/commit/a2f2449c4b9de81becff41cb25f1bca3fa180e8b) of the toqito project
([repo](https://github.com/vprusso/toqito)|[docs](https://toqito.readthedocs.io/en/latest/index.html)) made its way onto
GitHub.

![](/images/toqito_first_commit.png)

toqito began as a research tool, designed by Vincent Russo to accelerate his work in quantum information. In the years
since, it has evolved into a robust, open-source Python library providing powerful tools for researchers and enthusiasts
alike.

![](/images/toqito_stars.png)

## Expanding Quantum Research with toqito
toqito has grown significantly in the past four years. It allows users to study fundamental objects in quantum
information: [quantum states](https://toqito.readthedocs.io/en/latest/intro_tutorial.html#states), 
[quantum channels](https://toqito.readthedocs.io/en/latest/intro_tutorial.html#channels), and 
[quantum measurements](https://toqito.readthedocs.io/en/latest/intro_tutorial.html#measurements). With tools to tackle
problems in entanglement theory, nonlocal games, and convex optimization, toqito has made strides in democratizing
quantum research.

toqito's main focus is providing tools in Python, inspired by the [QETLAB](https://qetlab.com/) MATLAB library, but
without the licensing restrictions of MATLAB. Researchers can work with quantum systems using Python’s widely used
scientific ecosystem.

There have also been a number of academic publications that have made used of `toqito` to numerically define and analyze
certain problems in quantum information. A collection of these can be seen here

- [![a](https://img.shields.io/static/v1?label=arXiv&message=2406.13430&color=inactive&style=flat-square)](https://arxiv.org/abs/2406.13430) Bandyopadhyay, Somshubhro and Russo, Vincent
"Distinguishing a maximally entangled basis using LOCC and shared entanglement", (2024).

- [![a](https://img.shields.io/static/v1?label=arXiv&message=2307.2551&color=inactive&style=flat-square)](https://arxiv.org/abs/2307.02551) Tavakoli, Armin and Pozas-Kerstjens, Alejandro and Brown, Peter and Araújo, Mateus
"Semidefinite programming relaxations for quantum correlations", (2023).

- [![a](https://img.shields.io/static/v1?label=arXiv&message=2311.17047&color=inactive&style=flat-square)](https://arxiv.org/abs/2311.17047) Johnston, Nathaniel and Russo, Vincent and Sikora, Jamie
"Tight bounds for antidistinguishability and circulant sets of pure quantum states", (2023).

- [![a](https://img.shields.io/static/v1?label=arXiv&message=2308.15579&color=inactive&style=flat-square)](https://arxiv.org/abs/2308.15579) Pelofske, Elijah and Bartschi, Andreas and Eidenbenz, Stephan and Garcia, Bryan and Kiefer, Boris
"Probing Quantum Telecloning on Superconducting Quantum Processors", (2023).
 
- [![a](https://img.shields.io/static/v1?label=arXiv&message=2303.07911&color=inactive&style=flat-square)](https://arxiv.org/abs/2303.07911) Philip, Aby and Rethinasamy, Soorya and Russo, Vincent and Wilde, Mark. 
"Quantum Steering Algorithm for Estimating Fidelity of Separability.", Quantum 8, 1366, (2023).

- [![a](https://img.shields.io/static/v1?label=arXiv&message=2302.09401&color=inactive&style=flat-square)](https://arxiv.org/abs/2302.09401) Miszczak, Jarosław Adam. 
"Symbolic quantum programming for supporting applications of quantum computing technologies.", (2023).

- [![a](https://img.shields.io/static/v1?label=arXiv&message=2306.09444&color=inactive&style=flat-square)](https://arxiv.org/abs/2306.09444) Casalé, Balthazar and Di Molfetta, Giuseppe and Anthoine, Sandrine and Kadri, Hachem. 
"Large-Scale Quantum Separability Through a Reproducible Machine Learning Lens.", (2023).

- [![a](https://img.shields.io/static/v1?label=arXiv&message=2206.08313&color=inactive&style=flat-square)](https://arxiv.org/abs/2206.08313) Russo, Vincent and Sikora, Jamie "Inner products of pure states and their antidistinguishability", Physical Review A, Vol. 107, No. 3, (2023).

## Core Concepts: Quantum States, Channels, and Measurements
In quantum information science, quantum states represent the fundamental objects we manipulate, quantum channels
describe the transformations applied to these states, and quantum measurements allow us to extract information from
states.

### Example: Defining and Analyzing a Quantum State
In this example, we calculate the fidelity between two quantum states—-a fundamental task in quantum state comparison.

For example, in the event where we calculate the fidelity between states that are identical, we should obtain the value
of 1. This can be observed in toqito as follows.

```py
>>> from toqito.state_metrics import fidelity
>>> import numpy as np
>>> rho = 1 / 2 * np.array(
...    [[1, 0, 0, 1],
...     [0, 0, 0, 0],
...     [0, 0, 0, 0],
...     [1, 0, 0, 1]]
... )
>> sigma = rho
>>> fidelity(rho, sigma)
1.0
```

### Quantum State Discrimination
A more engaging example is quantum state discrimination, a widely applicable problem in cryptography and quantum
computing. The goal is to distinguish between different quantum states in an optimal way. This is typically formulated
as a convex optimization problem.

In toqito, this problem can be tackled efficiently using semidefinite programming (SDP). Below is an example of
discriminating between two quantum states.

In the following example, we see that it is possible to perfectly distinguish (with minimum-error) amongst the four Bell
states:

```py
>>> import numpy as np
>>> from toqito.states import bell
>>> from toqito.state_opt import state_distinguishability

>>> states = [bell(0), bell(1), bell(2), bell(3)]
>>> probs = [1 / 4, 1 / 4, 1 / 4, 1 / 4]
>>> res, measurements = state_distinguishability(vectors=states, probs=probs, primal_dual="primal")
np.around(res, decimals=2)
np.float64(1.0)
```

Quantum distinguishability is a rich field of research and having the ability to pull "off the shelf" techniques to
determine the probability of distinguishing a set of quantum states is a useful technique for rapidly iterating on
research in this domain.

## Unitary Fund accelerates toqito

In the early days of toqito, Vincent showed some basic functionality to co-workers with a quantum information
background. One of them suggested the Unitary Fund’s [microgrant program](https://unitary.fund/grants/). To his delight,
toqito was accepted as a microgrant recipient after making a short video for the application. Not only was the monetary
reward a nice boost of encouragement, but the associated support from the UnitaryFund team pushed him to reach out to
other scientists and researchers who may benefit from toqito and potentially guide its development. 

One of the opportunities suggested by the Unitary Fund to promote toqito included a talk to the  [New York Quantum
Computing Meetup group](https://www.meetup.com/new-york-quantum-computing-meetup/) participants. Vincent recorded the
subsequent [first video on the UnitaryFund YouTube channel](https://www.youtube.com/watch?v=6R7qSszJwBI) that outlined
the basic premise of toqito at that time. To promote toqito to a broader audience, a short
[whitepaper](https://joss.theoj.org/papers/10.21105/joss.03082) was published in the Journal of Open Source Software.

Later that year, the first [UnitaryHACK 2021](https://unitary.fund/posts/unitaryhack2021/) event took place. This
hackathon allows maintainers of quantum open-source (QOSS) software repositories to participate by adding a set of
bountied issues to improve the participating QOSS project. This hackathon also involved some of the earliest external
contributors to toqito. 

toqito has since continued to be a participating project at subsequent UnitaryHACKs
([2022](https://unitary.fund/posts/2022unitaryhack/), [2023](https://unitary.fund/posts/2023_unitaryhack/), and
[2024](https://unitaryhack.dev/)) and has gained more users, contributors, and essential features that have been
invaluable to the broader community. 

As toqito continued to gain usage and traction, another [UF microgrant](https://unitary.fund/grants/) to further develop
the project was awarded to a prior contributor of UnitaryHACK 2023 ([Purva Thakre](https://github.com/purva-thakre)).
These funds allowed dedicated time to delve into some of the more in-depth feature requests and continue to improve
additional aspects of the project, such as thorough testing, documentation, CI/CD, and tutorials.

In addition to being cited and used in peer-reviewed research papers on quantum information, toqito has also been
recognized elsewhere. toqito was voted one of the [top quantum simulators for 2024 by
QuantumInsider](https://thequantuminsider.com/2022/06/14/top-63-quantum-computer-simulators-for-2022/). Recently,
[KaiCode](https://www.kaicode.org/2024.html) awarded toqito the first place prize for being the best project of 400+
projects judged on clean code, good project structure, etc. Furthermore, as of September 2024, toqito is now an
[affiliated project of NumFOCUS](https://numfocus.medium.com/august-september-project-updates-e3dac6f86aa8).

## The future of toqito

The toqito project continues to be used and contributed to by numerous researchers and software developers in the
quantum ecosystem. For instance, another UF microgrant was recently awarded to [Aidan
Sims](https://www.linkedin.com/in/aidan-sims) to port [cvxquad](https://github.com/hfawzi/cvxquad) functions written in
MATLAB into toqito’s channels/ module.

There are many exciting plans for [the future of toqito](https://github.com/vprusso/toqito/wiki). If you feel that
toqito may enhance your research workflow or the toqito roadmap lacks a particular feature, don’t hesitate to contact
the developers through the [Discord channel](https://discord.com/channels/764231928676089909/1172282184833454090). If
you want to contribute to the project, consult the [contribution
guide](https://toqito.readthedocs.io/en/latest/contributing.html), open a PR, or add an issue to [the
board](https://github.com/vprusso/toqito/issues).

We look forward to seeing where toqito goes from here!