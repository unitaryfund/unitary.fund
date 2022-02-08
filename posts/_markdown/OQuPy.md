---
title: Open Quantum Systems in Python (OQuPy)
date: 07 February 2022
authors: Gerald Fux and Dominic Gribben
---
In 2018 Stathearn et al. developed a technique that allowed efficient non-perturbative simulation of open quantum systems using a tensor network approach. The Time Evolving Matrix Product Operators (TEMPO) algorithm enabled calculation of dynamics of a system coupled linearly to a single bosonic environment. In 2019 J&oslash;rgensen and Pollock identified that the TEMPO algorithm could be modified slightly and used to generate process tensors. Process tensors are costly to calculate but once done they give quick access to the readout of the system in response to any possible set of controls enacted over its evolution. The generality of the original TEMPO algorithm and its use in generation of process tensors (PT-TEMPO) opened up a wide array of research paths that even now have only just begun to be explored. The majority of publications since its inception have been from those directly involved with development of the codebase (and therefore intimately familiar with it). With this in mind we were inspired to build these methods into an open source, well maintained and, most importantly, user friendly package; thus **O**pen **Qu**antum Systems in **Py**thon (OQuPy pronounced 'occupy') was born.

## Extending OQuPy

Beyond TEMPO and PT-TEMPO there have been a number of extensions developed in recent years that, while proven effective in published work, were relatively detached from the core TEMPO functionality and lacked a well maintained code base. Here we will focus on two of these:

1. Calculation of bath correlations from system correlations
2. Non-perturbative simulation of a system coupled to multiple environments

We decided to add these to the OQuPy package with hope that they would further attract new users who might find some use of these in their own research. The first of these allows further characterisation of the behaviour of an open quantum system by giving insight into the specific role of the environment which can become increasingly significant in cases of strong coupling. The second gives the user the possibility to account for strong coupling to multiple environments and examine the effect of their interplay on the system's evolution.

### Bath Dynamics

It has long been accepted that in simulating open quantum systems one must typically trace over the environmental degrees of freedom and thus lose access to the wealth of information contained in them. In the weak coupling limit this is of little consequence as we would generally expect the environment to be effectively stationary and not be doing much interesting. However, as the coupling is increased the role of the environment becomes increasingly significant. In this regime correlations can build between the system and environment which lead to complex behaviour in the system observable dynamics. When we trace over the environment in this case we are obscuring half of an intricate back-and-forth between the system and surrounding. Fortunately, all is not lost. In fact it was shown in Ref [BATH_DYNS_REF] that, for a linearly coupled Gaussian environment, any correlation functions of the bath can be expressed purely in terms of the system correlation functions.

### Multiple Baths

There are many processes in reality that can be modelled as a finite system coupled to independent baths. Quantum dots driven by an optical field often couple strongly to the vibrational degrees of freedom of their host material too. Looking to nature, photosynthetic complexes often display strong coupling between their electronic and vibrational degrees of freedom and of course are coupled as well to photons from the Sun. Were both baths coupled weakly then typically their effects on the system are treated additively, as if the the other bath didn't exist. However, when either bath is strongly coupled this additive treatment can break down. When a quantum system is strongly coupled to a single bath it begins to makes less sense to talk about them as distinct entities and rather consider hybrid excitations of correlated states between them. For example in light-matter coupling we may consider working in a polariton basis or similarly a polaron basis for strong electron-phonon coupling. When we introduce a second bath, even though independent from the first and potentially weakly coupled, it inextricably interacts with the strongly coupled first bath via these correlated states. In Ref. [MULTI_BATH_REF] we showed how these *non-additive* effects for multiple environments can be captured by simply contracting together their process tensors.

### Implementation

For the bath dynamics functionality we have added a module `bath_dynamics` which currently contains a single class: `TwoTimeBathCorrelations`. This allows calculation of any second-order bath correlation function of a model described by a given system Hamiltonian and process tensor. Any necessary system correlation functions are computed and then stored for re-use on future bath correlation calculations.

The multi-bath feature was implemented with minimal adjustment of the existing code. As such it is relatively easy to use but certainly could be optimised in future. One can simply submit a list of process tensors (one for each bath) to the dynamics generator and these are then contracted to give their combined non-additive effect.

### Further and Future Extensions

Beyond the features covered above a module was recently added which allows the user to simulate a chain of systems each coupled to their own bath by using tensor network representations to efficiently capture temporal *and* spatial correlations. Further to this we hope to soon have a mean-field extension of TEMPO added where the degrees of freedom is reduced analytically through a supression of correlations between identical systems.

We sum up the current functionality of OQuPy in the following graphic:

![](/home/dominic/Dropbox/Unitary_Fund/unitary-fund/images/overview_alt.png)



If you have any suggestion for features you'd like to see then please don't hesitate to get in touch on our [issues](https://github.com/tempoCollaboration/TimeEvolvingMPO/issues) page!

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
