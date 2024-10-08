---
title: 'Open Hardware Solutions in Quantum Technology'
author: Nathan Shammah
day: 7
month: 3
year: 2024
tags:
- Research
---

**The software stack in quantum computing is widely open source. Now tools and frameworks related to quantum hardware are progressively getting open.**

We have recently reviewed the status of open hardware solutions in quantum technology in the first [review article](https://pubs.aip.org/aip/apq/article/1/1/011501/3267254/Open-hardware-solutions-in-quantum-technology)[^1] on the field, published in the first issue of _APL Quantum_. The paper provides a of open hardware today, lists several examples of existing tools and provides recommendations for the field development. 
Among co-authors of this study, are researchers from several institutions and organizations across academia, industry and government[^2], based in several continents, witnessing the wide effort underway.  

## Open quantum hardware today

The phases for opening hardware in quantum technology projects can be split as: 1. Design phase; 2. Fabrication step; 3. Installation and bring-up; 4) Sustained operation. 
For all these phases and steps, there exist already several projects and frameworks. As software tools are ubiquitious, e.g., in the modern design phase of processors, instead of simple blueprints, "open hardware" often involves software packages and frameworks developed to standardize, automate and process specific actions.  
Notable examples of software tools for design include pyEPR, KQCircuits and [Qiskit Metal](https://qiskit-community.github.io/qiskit-metal/). For control and data acquisition from quantum processing units, projects such as [ARTIQ](https://github.com/m-labs/artiq), [QICK](https://github.com/openquantumhardware/qick) and [QubiC](https://ieeexplore.ieee.org/document/9552516) leverage FPGAs and pulse-level radio-frequency signals for faster operation.

![Photomask layout and chip design with KQCircuits for superconducting circuit-based processors.](/images/2024_open_hardware_kqcircuits.png)
**Photomask layout and chip design with KQCircuits for superconducting circuit-based processors.**

As detailed in the [review article](https://pubs.aip.org/aip/apq/article/1/1/011501/3267254/Open-hardware-solutions-in-quantum-technology), the number of projects and open hardware solutions varies broadly depending on the qubit architecture: The most represented one is superconducting circuits.

## Ecosystem growth
At Unitary Fund we're committed to the growth of this ecosystem, as we did co-organizing the first workshop on the subject back in 2021 at IEEE Quantum Week, helping organize the first pyEPR online meetup, and hosting the QICK project weekly community calls on the UF Discord server (every Friday at 1pm PT).
The first  Unitary Fund [grants](https://unitary.fund/grants/) for open hardware projects have been awarded to further develop labscript-qc and sqooler ( sqooler such that it allows experimentalists and theorists a common remote SDK) and [OpenQuantum](https://open-quantum.org/), a blueprint for a magneto-optical trap that open-sources high-quality CAD files, electronic schematics, control firmware and assembly instructions along with teaching materials to create a much-needed educational platform for quantum science and engineering. 
We welcome the establishment of a growing number of facilities such as foundries, testbeds and centers for cloud-based open access, such as Sandia's QSCOUT or the [Open Quantum Design](https://openquantumdesign.org/). 

If you'd like to learn more about the open-hardware ecosystem, join an upcoming Quantum Wednesday talk on the Unitary Fund [Discord server](https://discord.gg/9TCwM9v8), on April 10, 2024 at 9:30 am PT / 12:30 pm ET/ 6:30p m CET.


[^1]: N. Shammah _et al._, "Open hardware solutions in quantum technology", [_APL Quantum_ **1** 011501 (2024)](https://pubs.aip.org/aip/apq/article/1/1/011501/3267254/Open-hardware-solutions-in-quantum-technology).
[^2]: Unitary Fund, Qruise GmbH, Technical University of Valencia, M-Labs Limited, Lawrence Berkeley National Laboratory, Fermi National Accelerator Laboratory, Sandia National Laboratories, IQM Quantum Computers, PASQAL, Quantonation, Michigan State University, Università di Camerino, Microsoft Quantum, University of California at Berkeley.
