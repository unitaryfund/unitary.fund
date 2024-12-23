---
title: The impact of Mitiq
author: nate stemen
day: 24
month: 12
year: 2024
tags: 
  - python
  - mitiq
  - community
---

As we approach the five-year anniversary of the Mitiq project, I'd like to reflect on the progress we've made and celebrate its ongoing role in shaping the quantum computing ecosystem.
Mitiq was created in early 2020 with the intention to *make error mitigation easily available to everyone running programs on quantum computers.*
Have we acheived this goal?
Making QEM easily available to **everyone** is an ambitious target, but as the adoption metrics below demonstrate, Mitiq has significantly lowered the barrier to using Quantum Error Mitigation (QEM) protocols.

As the field of Quantum Error Mitigation matured, Mitiq has gained recognition as an optional, but important component of the quantum computing stack.
While some skeptics argue that Quantum Error Correction (QEC) will eventually render QEM obsolete, others, like John Preskill, believe that the two approaches will complement one another even in the long term.
In his [talk at Q2B 2024](https://preskill.caltech.edu/talks/Preskill-Q2B-2024.pdf), Preskill stated:

> <p style="font-size: 24px;">Error mitigation will continue to be useful in the Megaquop era and beyond.</p>

Preskill's remarks underscore the enduring importance of error mitigation and highlight the need for an open-source, platform-agnostic tool like Mitiq to support the growing quantum ecosystem.
When Mitiq was first introduced in 2020, the landscape of QEM tools was nascent, with early efforts like pyquil's measurement error mitigation and Qiskit Ignis paving the way.
Since then, the ecosystem has expanded, with Mitiq leading the charge by implementing nine QEM techniques and offering official support for 6 quantum SDKs (and unofficial support for more).

Let's take a closer look at how Mitiq has shaped the field and grown over time.


## Adoption and Community Growth

At the core of making QEM available to all, is building a platform-agnostic tool.
Whether you're writing your quantum program with Qiskit, Cirq, PyQuil, Qibo, Braket, ..., you can use Mitiq!
This has been a major driving force behind the growth and adoption of the project, and allows for users to write QEM code once with the flexibility of running on any (gate-based) hardware.
As the only SDK-agnostic QEM tool[^2], Mitiq's adoption metrics provide a clear measure of its utility and impact.

[^2]: To create such a tool in the ever-changing quantum software landscape that does not have an established IR, is, to say the least, a lot of work. In particular the **maintenance** required to stay up to date with $n$ SDKs and conversions between.

- **Downloads:** Over 195,000 total downloads (and counting!).
- **GitHub Engagement:** Mitiq has accumulated over 360 stars, 160 forks, and contributions from 76 developers worldwide.
- **Scientific Reach:** Researchers have cited Mitiq over 120 times since 2020 when the [whitepaper](https://arxiv.org/abs/2009.04417) was put online.

<div style="display: flex; justify-content: center; align-items: center;" class="side-by-side">
  <figure style="text-align: center;">
    <img src="/images/2024-mitiq/mitiq.png" width="600" alt="Bar chart of the Mitiq downloads per year from 2020 to 2024.">
    <figcaption>More than 50% growth in Mitiq downloads year over year!</figcaption>
  </figure>
</div>

The thriving Mitiq community is a testament to the importance of open-source collaboration.
From first-time contributors to experienced quantum researchers, everyone has played a role in elevating Mitiq to the tool it is today.

## Driving Research and Innovation

Mitiq has been an instrumental tool in advancing research across diverse areas of quantum computing, including benchmarking, quantum simulation, and QEM research.
Its easy-to-use API, combined with extensive documentation, has empowered researchers from fields like condensed matter and many-body physics to explore techniques that push the boundary of what's possible on today's quantum hardware.
Notable examples include:

- **Computational physics:** Researchers used Mitiq's ZNE functionality to mitigate noise in quantum simulations of Heisenberg spin chains, enhancing fidelity and extending simulations beyond hardware coherence times. [[*Quantum dynamics simulations beyond the coherence time on NISQ hardware by variational Trotter compression*](https://arxiv.org/abs/2112.12654)]
- **Statistical physics:** Researchers used Mitiq to demonstrate a reduction in noise during quantum simulations of Bethe eigenstates. Their experiments, the authors (of [*Algebraic Bethe Circuits*](https://quantum-journal.org/papers/q-2022-09-08-796/)) say,
    > highlight the utility of error mitigation. In particular [our experiments] show further evidence that learning based error mitigation is practically useful in reducing the effects of hardware noise."
- **Condensed matter:** Researchers used Mitiq's ZNE functionality to mitigate noise in quantum simulations of lattice gauge models, improving the accuracy of observables on noisy hardware. [[*Towards the real-time evolution of gauge-invariant $\mathbb{Z}_2$ and $U(1)$ quantum link models on NISQ Hardware with error-mitigation*](https://arxiv.org/abs/2109.15065)]
- **QEM research:** Researchers used Mitiq to implement and benchmark error mitigation techniques, including standard PEC and a novel optimization designed for noise-biased qubits. [[*Low bit-flip rate probabilistic error cancellation*](https://arxiv.org/abs/2411.06422)]
- **Machine learning:** Researchers compare ML based approaches for QEM against Mitiq's ZNE. [[*Synergy between noisy quantum computers and scalable classical deep learning*](https://arxiv.org/abs/2404.07802)]
- **Benchmarking:** Unitary Fund researchers benchmarked Mitiq (ZNE and PEC) across hardware platforms and vendors. Mitiq is currently the only tool available to facilitate such a study. [[*Testing platform-independent quantum error mitigation on noisy quantum computers*](https://arxiv.org/abs/2210.07194)]

By providing an easy-to-use interface for applying error mitigation techniques, Mitiq has significantly reduced the barrier to both use **and** study error mitigation protocols.

## Education and Outreach

Mitiq has not only advanced research but also contributed to education and training in quantum computing.
At the start of 2024 I had the pleasure to interview more than 50 people across the quantum computing industry to discuss the challenges they faced in using quantum computers.
One thing that was touched on by nearly all interviewees who had contributed to Mitiq at some point was how easy it was to get started contributing.
We pride ourselves in maintaining a project that is well documented (even for developer flows), and easy to get some (informal) mentorship on.
Our industry needs talent, and Mitiq has helped onboard people with skills (software, research, technical writing, etc.) that are needed into our emerging field.
Some of the key ways that we work to encourage this include:

- **Documentation:** Mitiq has over 100 pages of documentation for our QEM techniques, showing both the theory and practice of applying QEM on real devices. This includes 35 examples to base your next project on as well as a [short video explainer](https://www.youtube.com/watch?v=47GWi4h7TWM) of our latest technique.
- **Presentations:** Since Mitiq's inception, Unitary Fund staff, alongside Mitiq contributors have delivered over 50 talks to the scientific and programming communities. This year we presented at the APS March meeting, IEEE QCE, and unitaryCON.
- **Mitiq workshop:** This year we hosted a workshop dedicated solely to teaching people how to use, contribute to, and experiment with Mitiq in conjunction with the [QNumerics summer school](https://qnumerics.org/).
- **Project mentorship:** We've continued to grow our connections with students by mentoring QEM projects through [QRISE](https://www.quantumcoalition.io/qrise), the [University of Washington's capstone course](https://unitary.fund/posts/2024_capstone_uw/), and a new project coming soon in conjuction with the University of Amsterdam.


## Looking Ahead

The space is growing... a lot!
It's hard to get a sense of project usage from open-source software stats, but when many similar projects are seeing upticks in the number of downloads, it is a stronger signal that tools related to error mitigation/suppression/characterization are in high demand.
Below you can see the download number from two other open-source projects, Qermit (error mitigation) and pyGSTi (tomography).

<style>
  .side-by-side {
    display: flex;
    justify-content: center; /* Center align the images */
    gap: 10px; /* Add spacing between images */
  }
  .side-by-side img {
    max-width: 100%;
    height: auto;
    border-radius: 8px; /* Optional rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional shadow */
  }
  .side-by-side div {
    text-align: center; /* Center captions under images */
    width: 45%; /* Control image width */
  }
</style>

<div class="side-by-side">
  <div>
    <img src="/images/2024-mitiq/qermit.png" alt="Bar chart of the Qermit downloads per year from 2021 to 2024.">
    <p>Qermit saw a 100% increase in downloads YoY!</p>
  </div>
  <div>
    <img src="/images/2024-mitiq/pygsti.png" alt="Bar chart of the pyGSTi downloads per year from 2016 to 2024.">
    <p>pyGSTi amassed over 120k downloads in a calendar year!</p>
  </div>
</div>

Two takeaways from these plots are

1. QEM as a whole is growing, not just Mitiq, and
2. lots of people are running tomography experiments.

These two facts, taken together with the lack of tooling[^1] to take noise characterization data to inform QEM showcase a gap in our ecosystem.
A gap that we hope to (at least start to) fill in the coming year.

[^1]: IBM has recently released the a new API: [`NoiseLearner`](https://docs.quantum.ibm.com/api/qiskit-ibm-runtime/qiskit_ibm_runtime.noise_learner.NoiseLearner). This is an excellent example of using noise characterization to inform runtime, and should be generalized to work across the quantum stack (not just Qiskit).

In addition to noise characterization, we've seen two other needs from our community.

1. On the software side, tooling is needed for QEM technique comparison and combination, and
2. on the research side, the industry needs a better understanding of how QEM will interplay with QEC.

We hope to make progress on both of these in 2025, and we won't be able to without your help!
We need fresh ideas, people writing code, doing research, giving talks, etc.
If this sounds like something you're interested in, I encourage you to get involved.

## Join the Mitiq Community

Whether you're a researcher, educator, or software engineer, or quantum tinkerer, there's a place for you in the Mitiq community.

- Check out the [`mitiq`](https://github.com/unitaryfund/mitiq) GitHub repository and contribute by opening issues, asking questions, or making a pull request. If you have a QEM technique you'd like to use, let us know! Feature requests are always appreciated, and encouraged.
- Join our [Discord community](http://discord.unitary.fund) to connect with me and all the other wonderful Mitiq developers and quantum enthusiasts.
- Sign up to receive the [Mitiq Newsletter](https://forms.gle/6UcUjSawHyweXhQV7) to stay up to date with the latest happenings.

Happy holidays and happy new year!
Here's to 2025&mdash;a year of fewer errors, and better tools.
