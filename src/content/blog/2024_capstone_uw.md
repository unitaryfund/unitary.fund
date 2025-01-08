---
title: Resource Requirement Pipeline for Quantum Error Mitigation Capstone
author: Ella Carlander, Ruhee Nirodi, Alexandros Peltekis 
day: 12
month: 6
year: 2024
tags:
- Mitiq
- Guest Post
---

We are a group of graduate students at the University of Washington (UW) who spent the last ten weeks working with Unitary Fund as participants in UW’s Accelerating Quantum-Enabled Technologies (AQET) capstone course. AQET is an interdisciplinary traineeship program involving a unique curriculum in quantum information science and engineering, including the capstone course which pairs students with industry professionals and academic mentors for a quarter-long project. We worked with Unitary Fund to create a benchmarking pipeline and GUI using the Mitiq library, with the hopes of providing users a streamlined tool to compare overhead requirements and the effectiveness of various quantum error mitigation methods in Mitiq. 


## About Us

### Ella Carlander
I am a second year PhD student in the Physics Department at UW, where I work in Armita Nourmohammad’s lab. Our group is broadly interested in statistical biophysics, and my research is focused on using machine learning models to investigate predictors of function in immune system proteins. My interest in quantum information is very tangential to this work, so I am grateful for the opportunity to participate in AQET and further develop that interest.

### Ruhee Nirodi
I’m a second year PhD student in the physics department at UW, working with Professor David Cobden. Our focus is probing and measuring fundamental quantum phenomena in 2D materials such as graphene and recently, WTe2. I have been interested in quantum information since college, and was super excited to work with the Unitary Fund to learn more about the field.

### Alexandros Peltekis
I'm a first-year PhD student in Chemistry at the UW and am researching with the Xiaosong Li Group. The group focuses on electrionic structure theory. I research how "freezing" certain aspects of detailed molecular models affects the balance between computational speed and accuracy. I also am supporting the development of Chronus Quantum, our group’s open-source software. This project with the Unitary Fund provided a great opportunity to apply my skills i've learned from the AQET program to a practical problem in the world of error mitigation.


## Project Background
Quantum error mitigation (QEM) is an active field of research seeking to reduce the effects of noise when performing computation on contemporary quantum devices. Several QEM techniques have been developed that vary in performance and overhead, many of which are implemented in Mitiq. However, individuals seeking to perform mitigation may have different priorities regarding the consumption of resources and performance improvement, and Mitiq does not currently address how various techniques vary in this regard. This motivates the need for a tool that can characterize and compare the overhead of these techniques, providing insight into which method may best suit one’s interests. 

### General Timeline:
Week 1-2: Diving into Mitiq and quantum computing: We started by familiarizing ourselves with Mitiq’s architecture and functionalities by reading documentation, playing around with some of the error mitigation tutorials, and asking many questions.

Week 3-5: Executors, metadata, and the GUI: These weeks we became accustomed with Mitiq’s executor functions, and established our analysis pipeline by first focusing on Mitiq’s Zero-Noise Extrapolation (ZNE) implementation. We also set up metadata extraction, and got started building GUI to access some of our data.

Week 6-8: Testing and Refining: With the core components in place, we extended our analysis to with other Quantum Error Mitigation methods: Probabilistic Error Cancellation (PEC), Digital Dynamical Decoupling (DDD), and Readout Error Mitigation (REM).


Week 9-10: Finalizing and Presentation: In the final weeks, we added finishing touches to the pipeline and GUI and prepared for their presentations. We participated in Unitary Fund’s Quantum Wednesday ([our presentation](https://docs.google.com/presentation/d/11FEIywpcXSVNXL2N5nLfeunERBHIylx5CP0Rcy66320)) and presented at a couple of our university’s poster sessions ([our poster](https://docs.google.com/presentation/d/1zMg_01GkpEG5WdwVdCubuIMgSyywb4Rp)).


### Results
In order to directly compare certain overhead parameters for each QEM technique, we ran a standardized experiment using each technique. We generated 10 mirror circuits---a type of quantum benchmarking circuit---each with fixed depth and number of shots, increasing the numbers of qubits. We used two tailored noise models run on simulators---a thermal relaxation model with an added readout error, and a depolarizing noise model with single and two-qubit errors. Prior to running any sweeps involving mitigation, we ensured that our pre-mitigated expectation values were comparable using both noise models, thus ensuring our initial results were standardized. We then ran sweeps over the circuit qubit number with error mitigation and recorded various measures of overhead required when using the mitigation. Overhead measurements included the additional number of single and two-qubit gates required, the total added circuit depth, the number of additional unique circuits needed to be run, and the additional time required to run each technique. The "no error mitigation" comparison was run on our thermal noise model. The results for the time requirements are are shown in the graphs below.

<p align="center">
  <img src="/images/capstone_UW_24_time.png" alt="Time Requirements" style="width: 45%; display: inline-block;"/>
  <img src="/images/capstone_UW_24time_zoomed.png" alt="Time Requirements Zoomed" style="width: 45%; display: inline-block;"/>
</p>

We see that the time required for implementing each technique varies greatly between the different methods, as does the way those time requirements scale with the size of the input circuit. The behavior displayed by each method can be qualitatively explained by the theory behind how the mitigation is performed. For instance, DDD works by simply modifying vacant parts of the input circuit, not requiring any additional circuits to be run. This explains why we see very low additional time costs for that method. On the other hand, ZNE requires the execution of several circuits, each with a number of operations that scales linearly in the number of qubits N. Each operation has a standard runtime, so the total time cost scales linearly, which is roughly what we see. REM requires inverting a 2N×2N matrix, explaining its steep increase in time cost for large N. Lastly, PEC’s behavior is explained by the fact that it requires running many versions of the input circuit, which takes more and more time as the complexity of that input increases.

This analysis is one demonstration of how important it is to characterize the overhead of QEM techniques, as time is almost always an important consideration for quantum researchers. We performed a similar analysis for the other measures of overhead that we considered, which also exhibit variation between techniques. Being able to see this type of information is helpful to someone unsure about which error mitigation technique fits their individual constraints.


## Closing notes

### A Tool for Comparison
In our project, we aimed to create a comprehensive tool that makes it easier for users to compare QEM methods. We developed:

1. A Pipeline for QEM Comparison: Our pipeline evaluates the performance and computational overhead of different QEM techniques, providing a structured framework for comparison.
2. A User-Friendly GUI: We designed an intuitive graphical user interface that simplifies the process of visualizing and comparing the results of different QEM techniques.

Working on this project has been an extremely rewarding experience for all three of us, and we are proud of what we have accomplished as a group. Throughout this process, we learned valuable information about quantum error mitigation and open-source quantum software while strengthening important skills in effective communication, software development, and time management. We would like to thank Nate Stemen for mentorship throughout this project, Boris Blinov and Brant Bowers at UW for advising, and the Unitary Fund community and AQET program for supporting us. 

