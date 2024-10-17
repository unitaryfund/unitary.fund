---
title: "Just in time for just-in-time error mitigation"
author: Alessandro Cosentino
day: 31
month: 10
year: 2024
---

We all want faster computer programs. Just-in-time (JIT) compilation has been a key concept in classical compiler design to help achieve faster computer programs. Most modern programming languages and runtime environments support some kind of JIT optimization techniques. In fact, very recently, an [experimental JIT compiler](https://docs.python.org/3/whatsnew/3.13.html#whatsnew313-jit-compiler) was added to Python in its latest release, 3.13.

Just as JIT compilation accelerates classical programs, similar techniques can be applied to quantum computing to boost performance. We all want faster quantum computer programs.  Catalyst is a JIT compiler framework developed by Xanadu to speed up quantum programs written with their PennyLane library. If you have a PennyLane program, you can decorate it with some simple Catalyst syntax and, in many cases, you have a faster quantum computer program.

What we also want is more accurate quantum computer programs – accurate enough to be useful for the application or the experiment we seek to run. Quantum error correction is making significant strides, but it still introduces substantial overhead that can be impractical for near-term applications. We look at the more practical techniques of quantum error mitigation to make our quantum programs more accurate. Unitary Fund's own Mitiq project provides a Python package for applying error mitigation techniques to quantum programs. 

Even though Mitiq can be used with PennyLane programs, it doesn't seamless integrate into the Catalyst framework for JIT compilation. In the last few months, Unitary Fund and Xanadu have partnered to improve the integration of error mitigation techniques into the Catalyst compiler. The natural starting point was Zero-Noise Extrapolation (ZNE), which is
the most popular error mitigation technique in Mitiq, and arguably the simplest to implement, yet very effective.

Romain Moyard and the Xanadu compilation team had already implemented a basic version of ZNE in Catalyst. The Unitary Fund team took it from there, and extended it with additional options.The gist of ZNE is that it estimates the ideal result of a quantum program by 
- **Stage 1**: Executing the program at increased noise levels
- **Stage 2**: Extrapolating back to the zero-noise regime.

If you want to know more about the theory behind ZNE, check out [Mitiq documentation](https://mitiq.readthedocs.io/en/stable/guide/zne-5-theory.html).

We worked on the full Catalyst stack and added the following options to the respective stages of ZNE:

- _Local folding_ – Instead of applying noise scaling globally to the entire circuit, noise level increments can now be applied to individual gates, providing finer control over the noise scaling process.
- _Exponential extrapolation_ – An exponential function is fitted to the execution results of the noise-scaled programs, whereas the previous option only allowed for polynomial extrapolation. Exponential extrapolation can be advantageous in certain noise models where the error compounds exponentially with noise scaling.

Why is this important? It turns out that, depending on the underlying noise models, 
some folding techniques and some fitting techniques may perform better than others. 
In complex noise environments, having the flexibility to choose the most effective folding and extrapolation methods can significantly improve error mitigation outcomes. The more complex the noise model is, the more impactful it is to have such a level of customization in ZNE. Should this blog post inspire you to become a better ZNE practitioner, check out [this review paper](https://arxiv.org/abs/2307.05203) for how to make the most out of all the ZNE options.

After implementing these options, it was time to test them. Catalyst programs can already be run on Amazon Braket and error mitigation can be leveraged to attenuate the hardware noise there. Running on real hardware can be time- and money-expensive though. 
We needed a workflow with better feedback loop time, and for that, we turned into adding a simple depolarizing noise model to Unitary Fund's in-house simulator Qrack. If you missed Dan Strano's [post](https://unitary.fund/posts/2024_qrack_catalyst/) on Qrack integration with Catalyst, go and check it out!

![Catalyst ZNE diagram.](/images/catalyst-zne-diagram.png)

Did I tell you how much we learned? For the Unitary Fund team, this project was our first venture into the JIT world and the architectural stack that comes with implementing it. 
We had to ramp up on things like JAX and the MLIR framework (Multi-Level Intermediate Representation). Understanding MLIR gave us deeper insights into compiler design for quantum programs in general as well. I am not going to lie; it was all a bit daunting in the beginning, but it was incredibly rewarding!

Of course, there are always more options and more error mitigation techniques that we want to bring to Catalyst. This is just the start.

If you are also intrigued by just-in-time error mitigation and want to give it a try, 
read the [documentation](https://docs.pennylane.ai/projects/catalyst/en/latest/code/api/catalyst.mitigate_with_zne.html), run the [tutorial](https://pennylane.ai/qml/demos/tutorial_zne_catalyst), check out the [Catalyst](https://github.com/PennyLaneAI/catalyst) repository. Remember it's all open-source, and you are just in time to contribute!
