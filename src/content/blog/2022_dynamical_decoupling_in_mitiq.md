---
title: Adding Digital Dynamical Decoupling to Mitiq
author: UF Team
day: 21
month: 6
year: 2022
---

The Unitary Fund team is excited to announce the addition of dynamical decoupling features to Mitiq, the open-source quantum toolbox in Python that mitigates errors of NISQ devices.


Dynamical decoupling is a technique originally developed at the pulse level and has been modified to work in the context of gate-based quantum computers in **digital dynamical decoupling** (DDD).
The Mitiq community has designed and implemented this technique into it's own module `mitiq.ddd`.


Here is a sketch of how digital dynamical decoupling is applied in Mitiq.


![Digital Dynamical Decoupling workflow in Mitiq](/images/ddd_workflow.png)


## Learn more in the documentation

You can find a lot of details about the actual use of this technique in Mitiq in the [Users Guide](https://mitiq.readthedocs.io/en/latest/guide/ddd.html) part of the documentation, covering all about [how to easily apply DDD](https://mitiq.readthedocs.io/en/latest/guide/ddd-1-intro.html), [pros and cons](https://mitiq.readthedocs.io/en/latest/guide/ddd-2-use-case.html) of when to use this technique, what [additional options](https://mitiq.readthedocs.io/en/latest/guide/ddd-3-options.html) are available when using DDD,
what happens at the [code level](https://mitiq.readthedocs.io/en/latest/guide/ddd-4-low-level.html), and information about the [theory behind DDD](https://mitiq.readthedocs.io/en/latest/guide/ddd-5-theory.html).


## A Mitiq community achievement

The code design document was drafted by [Aaron Robertson](https://github.com/Aaron-Robertson) in collaboration with the Unitary Fund technical staff: Aaron is a [Unitary Fund ambassador](https://unitary.fund/posts/uf_ambassadors.html), and rightly so – thank you, Aaron!


The dynamical decoupling module has been deployed into Mitiq since version 0.16.0 and it marks a major milestone in the [2022 Mitiq Roadmap](https://github.com/unitaryfund/mitiq/wiki#mitiq-2022-roadmap).

This is a reminder for everyone to join the Mitiq community calls, which are held weekly on Fridays at 6pm CET / 12pm ET on the [Unitary Fund Discord](http://discord.unitary.fund).