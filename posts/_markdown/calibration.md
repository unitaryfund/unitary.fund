---
title: Calibrating Error Mitigation with Mitiq
date: 17 April 2023
author: Nate Stemen
---

# What is error mitigation calibration?

Error mitigation improves the performance of quantum programs, but with a myriad of mitigation strategies, and workflows to choose from, it can often be hard to know where to start.
Further, once a strategy is chosen, there can be many parameters that need to be tuned to optimize its performance.
For these reasons we have begun building a module within `mitiq` to help find the best mitigation strategy and parameters for your backend.
This makes it simpler to take advantage of the best error mitigating techniques.

The new functionality is accessed by instantiating a `Calibrator` object as follows.

<!-- ```py
from mitiq import Calibrator

cal = Calibrator(execute, frontend="cirq")
cal.execute_with_mitigation(circuit)
``` -->

![image demonstating the code workflow using a `Calibrator` object](../../images/mitiq-demo.png)

The Calibrator runs a series of experiments using different parameters on a collection of circuits.
The performance of these techniques are then weighed according to the improvement across a variety of circuits, and the strategy that performed best is returned to be used immediately on your circuit of choice.

Our goal with creating this module is twofold:

1. Make error mitigation more accessible by requiring less expert use in order to operate.
2. Encourage quantum programmers to experiment with error mitigation.

Futher documentation related to this feature can be found in our [user guide](https://mitiq.readthedocs.io/en/latest/guide/calibrators.html), as well as a new tutorial demonstrating the [module in action on a fake Qiskit device](https://mitiq.readthedocs.io/en/latest/examples/calibration-tutorial.html) (along with a [video walkthrough](https://www.youtube.com/watch?v=dB_3R84ewig) of the tutorial).
Since this module is still relatively new, we'd love to hear your feedback!
Whether it's a bug, feature request, or comment, feel free to get in contact at [nate@unitary.fund](mailto:nate@unitary.fund), or [open an issue](https://github.com/unitaryfund/mitiq/issues/new)!
