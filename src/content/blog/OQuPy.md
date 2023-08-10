---
title: Open Quantum Systems in Python (OQuPy)
author: Gerald Fux and Dominic Gribben
day: 7
month: 2
year: 2022
---

When an open quantum system is strongly coupled to a structured environment, describing the dynamics of that system becomes a challenging problem.  Moreover, traditional approaches, based on time evolution of the reduced density matrix are generally not able to correctly calculate higher-order or multi-time correlations. In the past few years efficient tensor network-based techniques based on an influence functional approach have been developed to address both these issues [1-5]. With the development of the OQuPy (**O**pen **Qu**antum Systems in **Py**thon) package we hoped to open up these methods to a much wider audience by placing the complex algorithms behind a user-friendly and intuitive interface.

## Extending OQuPy

Beyond the core functionality there have been a number of extensions developed in recent years that, while proven effective in published work, were relatively detached from the existing package and lacked a well maintained code base. Here we will focus on two of these:

1. Calculation of bath correlations from system correlations
2. Non-perturbative simulation of a system coupled to multiple environments

We decided to add these to the OQuPy package with hope that they would further attract new users who might find some use of these in their own research. The first of these allows further characterisation of the behaviour of an open quantum system by giving insight into the specific role of the environment which can become increasingly significant in cases of strong coupling. The second gives the user the possibility to account for strong coupling to multiple environments and examine the effect of their interplay on the system's evolution. Thanks to the Unitary Fund we were able to support the implementation of these to OQuPy. We will now briefly cover the background to both these features and how they currently fit into the package.

### Bath Dynamics

It has long been accepted that in simulating open quantum systems one must typically trace over the environmental degrees of freedom and thus lose access to the wealth of information contained in them. In the weak coupling limit this is of little consequence as we would generally expect the environment to be effectively stationary and not be doing much interesting. However, as the coupling is increased the role of the environment becomes increasingly significant. In this regime correlations can build between the system and environment which lead to complex behaviour in the system observable dynamics. When we trace over the environment in this case we are obscuring half of an intricate back-and-forth between system and surrounding. Fortunately, all is not lost. In fact it was shown in Ref [6] that, for a linearly coupled Gaussian environment, any correlation functions of the bath can be expressed purely in terms of the system correlation functions.

### Multiple Baths

There are many processes in reality that can be modelled as a finite system coupled to independent baths. Quantum dots driven by an optical field often couple strongly to the vibrational degrees of freedom of their host material too. Looking to nature: photosynthetic complexes often display strong coupling between their electronic and vibrational degrees of freedom and of course are coupled as well to photons from the Sun. Were both baths coupled weakly then typically their effects on the system are treated additively, as if the the other bath didn't exist. However, when either bath is strongly coupled this additive treatment can break down. When a quantum system is strongly coupled to a single bath it begins to makes less sense to talk about them as distinct entities and rather consider hybrid excitations of correlated states between them. For example in light-matter coupling we may consider working in a polariton basis or similarly a polaron basis for strong electron-phonon coupling. When we introduce a second bath, even though independent from the first and potentially weakly coupled, it unavoidably interacts with the strongly coupled first bath via these correlated states. In Ref. [7] it was shown how we can extend the base algorithm to capture the *non-additive* effects of multiple environments.

### Implementation

For the bath dynamics functionality we have added a module `bath_dynamics` which currently contains a single class: `TwoTimeBathCorrelations`. This allows calculation of any second-order bath correlation function of a given model. Any necessary system correlation functions are computed and then stored for re-use on future bath correlation calculations.

The multi-bath feature was implemented with minimal adjustment of the existing code. As such it is relatively easy to use but certainly could be optimised in future. One can simply follow the procedure for building a process tensor of each environment (as outlined [here](https://oqupy.readthedocs.io/en/latest/pages/tutorials/pt_tempo/pt_tempo.html)) then submit both as a list to the `compute_dynamics` function.

### Further and Future Extensions

Beyond the features covered above a module was recently added which allows the user to simulate a chain of systems each coupled to their own bath by using tensor network representations to efficiently capture temporal *and* spatial correlations [8]. Further to this we hope to soon have a mean-field extension of TEMPO added where the number of degrees of freedom is reduced analytically through a supression of correlations between identical systems [9].

We sum up the current functionality of OQuPy in the following graphic:

![](/home/dominic/Dropbox/Unitary_Fund/unitary-fund/images/oqupy_logo.png)



If you have any suggestion for features you'd like to see then please don't hesitate to get in touch on our [issues](https://github.com/tempoCollaboration/TimeEvolvingMPO/issues) page!

### References

- **[1]** Strathearn *et al.*, [New J. Phys. 19(9), 093009](http://dx.doi.org/10.1088/1367-2630/aa8744) (2017).
- **[2]** Strathearn *et al.*, [Nat. Commun. 9, 3322](https://doi.org/10.1038/s41467-018-05617-3) (2018).
- **[3]** Pollock *et al.*, [Phys. Rev. A 97, 012127](http://dx.doi.org/10.1103/PhysRevA.97.012127) (2018).
- **[4]** Jørgensen and Pollock, [Phys. Rev. Lett. 123, 240602](http://dx.doi.org/10.1103/PhysRevLett.123.240602) (2019).
- **[5]** Fux *et al.*, [Phys. Rev. Lett. 126, 200401](https://link.aps.org/doi/10.1103/PhysRevLett.126.200401) (2021).
- **[6]** Gribben *et al.*, [arXiv:2106.04212](http://arxiv.org/abs/2106.04212) (2021).
- **[7]** Gribben *et al.*, [*PRX Quantum* 3, 010321](https://doi.org/10.1103/PRXQuantum.3.010321) (2022).
- **[8]** Fux *et al.*, [arXiv:2201.05529](http://arxiv.org/abs/2201.05529) (2022).
- **[9]** Fowler-Wright *et al.* [arXiv:2112.09003](https://arxiv.org/abs/2112.09003) 2021.

<!--
Thanks for contributing a blog post to the UF site!

Some quick tips:
- Use the `title` field to set the title of your post, no first level header needed.
- Standard markdown formatting is supported (code blocks, links, images, etc.)
  - Put images for your post in the `images` folder.
- If you need further custom formatting, direct html will work here as well.
- 


NOTE: If this post needs external attribution, include the line below at the very top.
> _This blog was originally posted [here](), and is reproduced with the author's permission._ -->