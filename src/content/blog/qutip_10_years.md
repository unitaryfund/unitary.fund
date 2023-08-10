---
title: "QuTiP's 10-year anniversary"
author: The QuTiP Admin Team  
day: 12
month: 7
year: 2021
---

**QuTiP v. 1.0 was released 10 years ago**, on July 29th, 2011. It began as the project of two postdocs in Franco Nori’s group, Robert Johansson and Paul Nation and has since been embraced by an ever larger community of users and contributors. QuTiP is the most used software package for the simulation of open quantum systems as it’s used daily by researchers worldwide and students alike. 

**To mark the 10 year anniversary**, the QuTiP admin team would like to organize a **online party** to celebrate the project and its community of users and contributors: **You are all invited to an online meeting on July 29th, 2021 at 1pm GMT** ([**on Unitary Fund’s Discord server**](http://discord.unitary.fund/), see the [Community Calendar](https://unitary.fund/talks.html#calendar) to save the event in your agenda). We'll share recent updates on the project and everyone is welcome to add their own contribution. 

. As a summary, some stats:

- **Over 13,000 downloads a month** from the Python Package Index only and more than **350,000 downloads overall** from the Conda Forge channel by Anaconda only. 
- As of June 2021, 7076 commits, in over 13 version releases by over 96 contributors.
- The two QuTiP papers have been cited over 1500 times (according to Google Scholar).

  

There’s much more to discover and build with QuTiP and in QuTiP. We’d like to celebrate the collective achievements so far and discuss the future steps.

#### More than a Software Package 

QuTiP contains a bundle of dynamical solvers – efficiently treating Lindblad master equations at the density matrix level as well as Monte Carlo trajectories, down to more specific solvers such as for non-Markovian dynamics in structured baths and oscillating drives in Floquet theory. Moreover, more features have been added, from a quantum circuit simulator and compiler ([now with pulse-level noisy simulators on mock processors](https://arxiv.org/abs/2105.09902)) to more specific features and integrations. In a recent code design choice, these features have been spun out of the core package and now populate a family of packages in the QuTiP organization on GitHub. 

Over the years, the project has evolved. Beyond the updates of the first two major releases, that are documented in two research articles (QuTiP 1 and QuTiP 2), there have been two other major releases, and a **QuTiP version 5 release is in the pipeline for later in 2021**. Major updates will include a more flexible data layer structure and ways to make a quantum system evolve in time.

#### A Growing Community

The community continues to evolve. The team of lead contributors and maintainers has extended geographically and numerically, with 8 active members of the Admin Team overseen by a 5 member Advisory Board. A full list of contributors can be found on GitHub. In 2019 the first QuTiP developers’ workshop was organized, bringing together coders from different continents that had never met in person. Around the same year, QuTiP developers began engaging more and more with the wider scientific ecosystem of Python, such as SciPy Japan (Tokyo) and at EuroScipy 2018 (Trieste) and 2019 (Bilbao).

QuTiP has been supported over the years by various academic institutions, from RIKEN to Chalmers Technical University, to funding agencies in various countries and by non-profit organizations such as [**NumFOCUS**](https://numfocus.org/), mainly through the Google Summer of Code program, and by [**Unitary Fund**](https://unitary.fund/), as its first **affiliated project**.

Participation in the **Google Summer of Code** program, now in its third year, has been a huge success for QuTiP. Two of the previous years alumni remain highly active developers, and are on the admin team, and with three projects currently underway on a GPU-CuPy integration, a TensorFlow data layer, and a compiler for universal quantum circuit decomposition, it is an example of remote mentorship that works well for scientific open-source projects. 

With the help of **Unitary Fund**, the QuTiP project has established a formal open-source [**governance**](https://github.com/qutip/governance) and implemented a board and admin [**team**](https://qutip.org/devs) that meets monthly to discuss software development and community actions. A series projects building upon QuTiP have been funded with **Unitary Fund microgrants**, such as: 

- **QuNetSim**, a quantum networks simulator by Stephen Diadamo, a PhD student at the Technical University of Munich
- **SQWalk**, a stochastic quantum walk simulator by Lorenzo Buffoni, a PhD student at the University of Florence.
- **Krylov-based methods** for optimal control and master equation solutions, currently being developed by Diego Wisniacki and collaborators from the University of Buenos Aires. 

If you’d like to join the conversation, informal discussions are enabled by special channels on Unitary Fund’s Discord [server](http://discord.unitary.fund/), while the Google [forum](http://discord.unitary.fund/) is active for support in debugging and other questions on physics. QuTiP recently participated in a distributed **hackathon** with paid bounties and swag organized by Unitary Fund, [**UnitaryHACK**](https://unitaryfund.github.io/unitaryhack/participating-projects.html), which helped solve bugs, including an issue opened [back in 2018](https://github.com/qutip/qutip/issues/799) (!) and compensate both hackers and pull request reviewers. **See you on July 29th!**
