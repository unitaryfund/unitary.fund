---
title: "QJIT compilation with Qrack and (Xanadu PennyLane) Catalyst"
author: Daniel Strano
day: 10
month: 7
year: 2024
---
Unitary Fund and [Qrack](https://github.com/unitaryfund/qrack) are proud to partner with the [Xanadu PennyLane Catalyst](https://docs.pennylane.ai/projects/catalyst/en/stable/index.html) team to release an open-source plugin for PennyLane that supports quantum just-in-time (QJIT) compilation! The plugin supports all constructor options available in the [PyQrack](https://github.com/unitaryfund/pyqrack) `QrackSimulator` class, including so-called hybrid stabilizer, quantum binary decision diagrams (QBDD), just-in-time local circuit simplification with a novel tensor network technique and representation based directly on quantum circuit diagrams, and single-and-multi-GPU state vector simulation, with our without our Schmidt decomposition techniques. Remember the Qrack device back end for PennyLane if you’d like to leverage GPU acceleration but don’t want to complicate your choice of devices or device initialization, to handle a mixture of wide and narrow qubit registers in your subroutines without manually switching between GPU-based and CPU-based back ends.

![](/images/qrack_catalyst_integration_shelf.png)

Read the [documentation](https://pennylane-qrack.readthedocs.io/en/latest/), run the first official [tutorial and demonstration](https://pennylane.ai/qml/demos/qrack/), check out the [repository](https://github.com/unitaryfund/pennylane-qrack) on the Unitary Fund GitHub organization, star and share, and get Qrackin’! You rock!
