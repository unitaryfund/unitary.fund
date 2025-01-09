---
title: "Just in time for just-in-time error mitigation: Mitiq meets Catalyst"
author: Alessandro Cosentino
day: 18
month: 11
year: 2024
tags:
- Mitiq
- Partnership
---

This blog post is a summary of a partnership between Unitary Fund and 
[Xanadu](https://www.xanadu.ai/) to integrate quantum error mitigation techniques
from Unitary Fund's Mitiq into Xanadu's PennyLane Catalyst compiler.

## Just-in-time compilation

We all want faster computer programs. Just-in-time (JIT) compilation has been a key concept in classical compiler design to help achieve faster computer programs. The basic idea behind a JIT compiler is that it observes the program running and optimizes it based on those observations. Most modern programming languages and runtime environments nowadays support some kind of JIT optimization techniques. In fact, very recently, an [experimental JIT compiler](https://docs.python.org/3/whatsnew/3.13.html#whatsnew313-jit-compiler) was added to Python in its latest 3.13 release.

We all want faster quantum computer programs. Just as JIT compilation accelerates classical programs, similar techniques can be applied to quantum computing for boosting performance.   [Catalyst](https://github.com/PennyLaneAI/catalyst) is a JIT compiler framework developed by Xanadu to speed up quantum programs written with their PennyLane library. If you have a PennyLane program, you can easily decorate it with some simple Catalyst syntax and, in many cases, you have a faster quantum computer program.

What we also want is more accurate quantum computer programs – accurate enough to be useful for the application or the experiment we seek to run. Quantum error correction is making significant strides, but it still introduces substantial overhead that can be impractical for near-term applications. We look at the more practical techniques of quantum error mitigation to make our quantum programs more accurate. Unitary Fund's own [Mitiq](https://github.com/unitaryfund/mitiq) project provides a Python package for applying error mitigation techniques to quantum programs. 

## Just-in-time compiling error mitigation routines
Even though Mitiq can be used with PennyLane programs,  there was no seamless integration of error mitigation routines into the Catalyst compiler (or into any quantum JIT framework, as far as we know.) In the last few months, Unitary Fund and Xanadu have partnered to port Mitiq's error mitigation techniques onto Catalyst. The natural starting point was Zero-Noise Extrapolation (ZNE), which is the most popular error mitigation technique in Mitiq, and arguably the simplest to implement, yet it can be very effective.

Romain Moyard and the Xanadu team had already implemented a basic version of ZNE in Catalyst. The Unitary Fund team took it from there, and extended it with additional options. The gist of ZNE is that it estimates the ideal result of a quantum program by 
- **Stage 1**: Executing the program at increased noise levels
- **Stage 2**: Extrapolating back to the zero-noise regime.

If you want to know more about the theory behind ZNE, check out [Mitiq documentation](https://mitiq.readthedocs.io/en/stable/guide/zne-5-theory.html).

We worked on the full Catalyst stack and added the following options to the respective stages of ZNE:

- _Local folding_ – Instead of applying noise scaling globally to the entire circuit, noise level increments can now be applied to individual gates, providing finer control over the noise scaling process.
- _Exponential extrapolation_ – An exponential function is fitted to the execution results of the noise-scaled programs, whereas the previous option only allowed for polynomial extrapolation. Exponential extrapolation can be advantageous in certain noise models where the error compounds exponentially with noise scaling.

Why is this important? It turns out that, depending on the underlying noise models, 
some folding techniques and some fitting techniques may perform better than others. 
In complex noise environments, having the flexibility to choose the most effective folding and extrapolation methods can significantly improve error mitigation outcomes. The more complex the noise model is, the more impactful it is to have such a level of customization in ZNE. Should this blog post inspire you to become a better ZNE practitioner, check out [this review paper](https://arxiv.org/abs/2307.05203) for how to make the most out of all the ZNE options.

One crucial aspect of how ZNE is compiled in Catalyst is that all folding transformations 
take place while preserving the high-level structure of the original program, that is, conditionals and loops aren't unrolled. This allows the compiler to maintain a compact version
of the program even after applying error mitigation. 

## Noisy simulation on Catalyst
After implementing these new folding and extrapolation options, it was time to test them.
Catalyst programs can already be run on Amazon Braket, and error mitigation can be leveraged to
attenuate the hardware noise there. Running on real hardware can be time- and money-expensive though.
We needed a workflow to quickly smoke-test the new features, and for that, we turned into adding a simple depolarizing noise model to Unitary Fund's in-house simulator Qrack. If you missed Dan Strano's [post](https://unitary.foundation/posts/2024_qrack_catalyst/) on Qrack integration with Catalyst, go and check it out! Qrack is now the first quantum simulator implementing a noise model, as well as integrating with a JIT compiler framework.


## Across the Catalyst MLIR stack
![Catalyst ZNE diagram.](/images/catalyst-zne-diagram.png)

In order to implement all the new features, we touched across all layers of Catalyst's architectural stack, which is based on JAX and MLIR (Multi-Level Intermediate Representation) frameworks. Check out [Catalyst's architecture guide](https://docs.pennylane.ai/projects/catalyst/en/stable/dev/architecture.html) for motivations behind the stack, and how it is arguably a great fit for implementing a JIT compiler for _(hybrid)_ quantum programs, which also have support for things such as automatic differentiation. For those familiar with MLIR, an interesting note
is that the error mitigation routines are organized in their own dialect in the Catalyst stack.

Did I tell you how much we learned? For the Unitary Fund team, this project was our first venture into the JIT world and the frameworks that come with implementing it. In fact, understanding MLIR gave us deeper insights into compiler design for quantum programs in general as well. I am not going to lie; it was all a bit daunting in the beginning, but it was incredibly rewarding!

Of course, there are always more options and more error mitigation techniques that we want to bring to Catalyst and to JIT compilation. We also want to expand Qrack with 
more sophisticated noise models. This is just the start, and stay tuned on this blog for updates.

If at this point, you are intrigued by just-in-time error mitigation and want to give it a try, 
read the [documentation](https://docs.pennylane.ai/projects/catalyst/en/latest/code/api/catalyst.mitigate_with_zne.html), run the [tutorial](https://pennylane.ai/qml/demos/tutorial_zne_catalyst), check out the [Catalyst](https://github.com/PennyLaneAI/catalyst) repository. Remember it's all open-source, and you are _just in time_ to contribute!
