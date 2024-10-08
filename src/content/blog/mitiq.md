---
title: "Introducing Mitiq, an open-source software package for error mitigation on noisy quantum computers"
author: Andrea Mari, Nathan Shammah, Peter Karalekas, Ryan LaRose, Will Zeng
day: 10
month: 9
year: 2022
tags: 
- Mitiq
---

We're excited to introduce [**Mitiq**](https://www.github.com/unitaryfund/mitiq), a toolchain that helps reduce errors in noisy quantum computers.

See it in action! Here's an example in [Qiskit](http://qiskit.org/):

<div style="text-align: center;">
    <img src="https://res.cloudinary.com/dcz4ywuer/image/upload/v1690841822/th29qkobjwjod2wpc7wk.png" alt="" />
</div>

And in [Cirq](https://cirq.readthedocs.io/en/stable/):

<div style="text-align: center;">
    <img src="https://res.cloudinary.com/dcz4ywuer/image/upload/v1690841822/hkhrlzvdesovw8yasmwx.png" alt="" />
</div>

Mitiq's white paper has just been uploaded on the [**arXiv**](https://arxiv.org/abs/2009.04417). In it, we introduce the library and guide first users through its main features. Mitiq is designed to be a thin layer between quantum programmers (and their circuits) and real quantum processors of choice, or simulators.

In the paper, we show how to improve the performance of real quantum processors, running quantum programs on publicly available quantum computers on the cloud, Rigetti Computing and IBM Q processors.

To begin with, we've focused on zero-noise extrapolation, an error mitigation technique that has already been tested in the lab. We show how to use zero-noise extrapolation even if you don't have low-level laboratory access to your QPU. Instead, you can implement [**digital zero noise extrapolation**](https://arxiv.org/abs/2005.10921).

If you're interested in Mitiq and in quantum error mitigation, you can find information on usage and additional references in **Mitiq's documentation** at [**mitiq.readthedocs.io**](https://mitiq.readthedocs.io/en/stable/). To keep up to date with Mitiq's development, you can sign up for Unitary Fund's mailing list.

We're looking forward to the feedback of the quantum software community: from fixing bugs to proposing enhancements in zero-noise extrapolation to additional quantum error-mitigation techniques. We're keeping a list of [**events**](https://github.com/unitaryfund/mitiq/wiki/Mitiq-Talks-and-Events) where members of the Unitary Labs team will be attending.

Best wishes,

Unitary Labs – the Engineering team at Unitary Fund (Andrea Mari, Nathan Shammah, Peter Karalekas, Ryan LaRose, and Will Zeng)
