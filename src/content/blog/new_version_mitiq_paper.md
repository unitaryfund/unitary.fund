---
title: "A new version of the Mitiq white paper"
author: Unitary Fund Team
day: 15
month: 7
year: 2021
---

About a year ago, in September 2020, we released [Mitiq 0.1.0](https://unitary.fund/posts/mitiq.html) and posted its associated [white paper](https://arxiv.org/abs/2009.04417v1). This was the first “stable” version of an open-source Python package for [quantum error mitigation](https://mitiq.readthedocs.io/en/stable/guide/guide-error-mitigation.html) on near-term quantum computers. **Mitiq was officially born.**

At that time, only one error mitigation technique was implemented in Mitiq: **[zero-noise extrapolation](https://mitiq.readthedocs.io/en/stable/guide/guide-error-mitigation.html#zero-noise-extrapolation)**, which was (and still is) contained in the package module **mitiq.zne**.

Since then, Mitiq has developed at a rate of approximately one release per month. In this period, many new features have been added and many bugs have been fixed too :-). Some highlights include:

- A new module (**mitiq.pec**), implementing an error mitigation technique known as **[probabilistic error cancellation](https://mitiq.readthedocs.io/en/v0.9.3/guide/guide-error-mitigation.html#probabilistic-error-cancellation)**. The workflow to apply probabilistic error cancellation is very similar to that of zero-noise extrapolation, as shown in this [quickstart example](https://mitiq.readthedocs.io/en/v0.9.3/guide/guide-getting-started.html#probabilistic-error-cancellation). 
- A new module (**mitiq.cdr**), implementing a learning-based error mitigation method called **[Clifford data regression](https://mitiq.readthedocs.io/en/v0.9.3/examples/cdr_api.html)**.
- A new module (**mitiq.interfaces**), re-organizing all the integrations with other quantum software libraries. In particular, support for **Braket** circuits was recently introduced, in addition to the existing integrations (Cirq, Qiskit, PyQuil).

<!---- ![unitaryHACK](https://res.cloudinary.com/dcz4ywuer/image/upload/v1690842757/vb4gypbxm9bslnlr92d1.png) --->
<div align="center">
  <img src="https://res.cloudinary.com/dcz4ywuer/image/upload/v1690842757/vb4gypbxm9bslnlr92d1.png" style="width: 70%; height: auto;" />
</div>


  
>Diagram visualizing the modules of Mitiq. Extracted from [arXiv:2009.04417v2](https://arxiv.org/abs/2009.04417v2).

  

These new features, together with all the additional changes that are reported in the Mitiq [changelog](https://mitiq.readthedocs.io/en/v0.9.3/changelog.html), provided a strong motivation for re-submitting a **[new updated version of the Mitiq paper](https://arxiv.org/abs/2009.04417v2)** on the arXiv server.

**However, there was another important motivation too.** We are excited to give proper credit to the many people, beyond the Unitary Fund team, that provided a significant contribution to the development of the library. In alphabetical order, they are:

- Andre A. Alves,
- Piotr Czarnik,
- Mohamed El Mandouh,
- Max H. Gordon,
- Yousef Hindy,
- Aaron Robertson,
- Purva Thakre.

The re-submitted version has now 13 authors and, in the spirit of open-source projects, we hope that even more people will be involved in the future.

All Mitiq contributors are now proudly [acknowledged](https://github.com/unitaryfund/mitiq#contributors-) in the README page of Mitiq, where you can also find the links to their GitHub accounts.

  

**References**

- The second version of the Mitiq paper: [arXiv:2009.04417v2](https://arxiv.org/abs/2009.04417v2)
- The first version of the Mitiq paper: [arXiv:2009.04417v1](https://arxiv.org/abs/2009.04417v1)
- The documentation of Mitiq, pinned to the version (v0.9.3) associated to arXiv:2009.04417v2: [https://mitiq.readthedocs.io/en/v0.9.3/](https://mitiq.readthedocs.io/en/v0.9.3/)
