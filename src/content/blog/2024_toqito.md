---
title: "Toqito: Quantum Information Science Impact through Open Source"
author: Vincent Russo and Purva Thakre
day: 19
month: 9
year: 2024
tags:
    - python
    - toqito
    - microgrant
    - qis
---

![](/images/toqito_logo.png)

In early 2020, the humble [initial commit](https://github.com/vprusso/toqito/commit/a2f2449c4b9de81becff41cb25f1bca3fa180e8b) of the toqito project ([repo](https://github.com/vprusso/toqito)|[docs](https://toqito.readthedocs.io/en/latest/index.html)) made its way onto GitHub.

![](/images/toqito_first_commit.png)

toqito was launched as a personal research-oriented software project to help Vincent Russo perform more effective research in quantum information. A  tool like this would have been exceedingly helpful to Vincent as a PhD student as it would have allowed him to rapidly test ideas and accelerate the pace and progress of his research.

In the subsequent four years since its inception, toqito has seen significant contribution, development, and usage for different problems in quantum information.

![](/images/toqito_star_chart.png)

toqito is an open-source Python library for studying various objects in quantum information, namely, states, channels, and measurements. toqito provides numerical tools to study problems about entanglement theory, nonlocal games, and other aspects of quantum information often associated with computer science. Toqito is similar to and indeed inspired by the extensive [QETLAB]() MATLAB library. The goal was to expand on the set of functionalities offered by QETLAB and to also offer this functionality to Python programmers. This allows users to benefit from this functionality without the need of a MATLAB license. Additionally, as Python is a language that is widely used by the quantum community, using Python was a natural choice of implementation.

toqito contains various functions for fundamental operations in quantum information in addition to semidefinite programs
relying on the convex optimization module in `cvxpy`. In modules like [`states`](https://toqito.readthedocs.io/en/latest/autoapi/states/index.html), [`channels`](https://toqito.readthedocs.io/en/latest/autoapi/channels/index.html) and [`matrices`](https://toqito.readthedocs.io/en/latest/autoapi/matrices/index.html) a user can obtain quantum states, quantum channels and general matrices to utilize in their calculation. Furthermore, other submodules can apply operations ([`channel_ops`](https://toqito.readthedocs.io/en/latest/autoapi/channel_ops/index.html), [`matrix_ops`](https://toqito.readthedocs.io/en/latest/autoapi/matrix_props/index.html) etc.) to the quantum states, channels or matrices of interest as well as verify the inputs of interest satisfy certain properties ([`state_metrics`](https://toqito.readthedocs.io/en/latest/autoapi/state_metrics/index.html), [`channel_props`](https://toqito.readthedocs.io/en/latest/autoapi/channel_props/index.html), [`matrix_props`](https://toqito.readthedocs.io/en/latest/autoapi/matrix_props/index.html) etc.) 

For example, if we want to verify the density matrix of some quantum state has rank 1, toqito's [`state_props`](https://toqito.readthedocs.io/en/latest/autoapi/state_props/index.html) module makes it convenient to do so. 

```py
from toqito.states import ghz
from toqito.state_props import is_pure

ghz_state = ghz(2, 3)
rho = ghz_state @ ghz_state.conj().T
is_pure(rho)
```

In the early days of toqito, Vincent showed some basic functionality to co-workers with a quantum information background. One of them suggested the Unitary Fund’s [microgrant program](https://unitary.fund/grants/). To his delight, toqito was accepted as a microgrant recipient after making a short video for the application. Not only was the monetary reward a nice boost of encouragement, but the associated support from the UnitaryFund team pushed him to reach out to other scientists and researchers who may benefit from toqito and potentially guide its development. 

One of the opportunities suggested by the Unitary Fund to promote toqito included a talk to the  [New York Quantum Computing Meetup group](https://www.meetup.com/new-york-quantum-computing-meetup/) participants. Vincent recorded the subsequent [first video on the UnitaryFund YouTube channel](https://www.youtube.com/watch?v=6R7qSszJwBI) that outlined the basic premise of toqito at that time. To promote toqito to a broader audience, a short [whitepaper](https://joss.theoj.org/papers/10.21105/joss.03082) was published in the Journal of Open Source Software.

Later that year, the first [UnitaryHACK 2021](https://unitary.fund/posts/unitaryhack2021/) event took place. This hackathon allows maintainers of quantum open-source (QOSS) software repositories to participate by adding a set of bountied issues to improve the participating QOSS project. This hackathon also involved some of the earliest external contributors to toqito. 

Toqito has since continued to be a participating project at subsequent UnitaryHACKs ([2022](https://unitary.fund/posts/2022unitaryhack/), [2023](https://unitary.fund/posts/2023_unitaryhack/), and [2024](https://unitaryhack.dev/)) and has gained more users, contributors, and essential features that have been invaluable to the broader community. 

As toqito continued to gain usage and traction, another [UF microgrant](https://unitary.fund/grants/) to further develop the project was awarded to a prior contributor of UnitaryHACK 2023 ([Purva Thakre](https://github.com/purva-thakre)). These funds allowed dedicated time to delve into some of the more in-depth feature requests and continue to improve additional aspects of the project, such as thorough testing, documentation, CI/CD, and tutorials. 

In addition to being cited and used in peer-reviewed research papers on quantum information (a complete list can be found [here](https://github.com/vprusso/toqito?tab=readme-ov-file#references)), toqito has also been recognized elsewhere. Toqito was voted one of the [top quantum simulators for 2024 by QuantumInsider](https://thequantuminsider.com/2022/06/14/top-63-quantum-computer-simulators-for-2022/). Recently, [KaiCode](https://www.kaicode.org/2024.html) awarded toqito the first place prize for being the best project of 400+ projects judged on clean code, good project structure, etc. Furthermore, as of September 2024, toqito is now an affiliated project of NumFOCUS.

Toqito continues to be used and contributed to by numerous researchers and software developers in the quantum ecosystem. There are many exciting plans for [the future of toqito](https://github.com/vprusso/toqito/wiki). If you feel that toqito may enhance your research workflow or the toqito roadmap lacks a particular feature, don’t hesitate to contact the developers through the [Discord channel](https://discord.com/channels/764231928676089909/1172282184833454090). If you want to contribute to the project, consult the [contribution guide](https://toqito.readthedocs.io/en/latest/contributing.html), open a PR, or add an issue to [the board](https://github.com/vprusso/toqito/issues).

We look forward to seeing where toqito goes from here!