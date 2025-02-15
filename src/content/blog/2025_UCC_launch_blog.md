---
title: How UCC Solves Today's Quantum Compilation Problems
author: Unitary Foundation Team
day: 23
month: 1
year: 2025
tags: 
  - python
  - compiler
  - qiskit
  - qbraid
  - quantum hardware
---

## **How UCC Solves Today's Quantum Compilation Problems**

*Launch date: Jan 23, 2025*  
As quantum hardware continues to advance, so too does the complexity of programming that hardware. With increasing qubit counts, diverse gate operations, extended compute times, and varied architectures, there are new challenges for state of the art quantum compilation. This does not help busy programmers and scientists who are eager to make the best out available quantum hardware but are faced with an ever increasing list of choices to run their program on quantum computers. 

[Unitary Foundation](https://www.unitary.foundation) is working to make life easier for quantum programmers. We are excited to announce the Unitary Compiler Collection (ucc), an open source quantum computing compiler designed to simplify and enhance your quantum development experience. This first launch is just the start of a project that will grow over time with the community. We are developing it in public so that the whole community can share, compare and contribute their use cases and compiler passes, to the benefit of all. 

UCC is built to tackle the challenges of modern quantum computing with several key features:

**1\. High Performance Gate Reduction**  
UCC delivers state-of-the-art gate count reductions, outperforming standard passes in frameworks like Qiskit and TKET in benchmarks. Its optimizations balance accuracy and speed, enabling compilation for circuits with hundreds to thousands of qubits.

Below are our latest performance metrics for gate reduction (here called “compiled ratio”), averaging over a range of [benchmarks](https://github.com/unitaryfund/ucc/blob/main/benchmarks/run_ucc_benchmarks.ipynb) specified with OpenQASM. \[UPDATE with latest plots on launch date 1/23/25\]

![][image1]

*For benchmark results and reproduction scripts, visit: [UCC Benchmarks](https://github.com/unitaryfund/ucc/tree/main?tab=readme-ov-file#how-does-ucc-stack-up)*

**2\. No Code Changes to Switch Between Frontends**  
UCC supports **Qiskit**, **Cirq**, **TKET and any other front-end that exports to OpenQASM** out-of-the-box, enabling developers to use their preferred tools without rewriting code.

```python
from ucc import compile

compiled_qiskit_circuit = compile(my_qiskit_circuit)
compiled_cirq_circuit = compile(my_cirq_circuit)
...
```

You can also convert between any of the supported circuit formats by using the \``` return_format` `` keyword, no extra imports necessary:

```py
# conversions
compiled_tket_circuit = compile(my_qiskit_circuit, return_format="tket")
compiled_qasm2_circuit = compile(my_qiskit_circuit, return_format="qasm2")
...
```

**3\. Compatible with Any Backend Supporting OpenQASM**  
You can specify a wide range of return formats for your circuit, including **OpenQASM 2.0** and **OpenQASM 3.0**, making it compatible with major quantum hardware providers, including:

* **IBM Quantum**  
* **Rigetti**  
* **IonQ**  
* **Amazon Braket**

**4\. Straightforward Custom Compiler Passes**  
Developers can implement custom passes using UCC's flexible architecture, based on customizations of the Qiskit transpiler. The framework simplifies debugging and iterative improvements:

```py
from ucc import UCCDefault1ucc_compiler = UCCDefault1()
ucc_compiler.pass_manager.append(MyCustomPass())
custom_compiled_circuit = ucc_compiler.run(circuit_to_compile)
```

*Learn how to write your own pass in the [User Guide](https://github.com/unitaryfund/ucc/blob/main/docs/source/user_guide.rst#writing-a-custom-pass)*

### **Vision for the Future of UCC**

The UCC roadmap includes advanced features aimed at pushing the boundaries of quantum compilation:

* **Quantum Error Mitigation (QEM):** Tools for suppressing and reducing errors to improve program fidelity, including integration with [Mitiq](https://github.com/unitaryfund/mitiq).  
* **Hardware-Aware Compilation:** Support for custom routing and scheduling optimized for emerging architectures.  
* **Quantum Error Correction (QEC):** Integration of error-correcting codes to enable fault-tolerant quantum computing.  
* **Quantum Control Optimization:** Techniques to optimize pulse-level control and reduce noise during execution.

We’re also looking for ideas from you\! What would you like to see added to your compiler toolchain? Are there techniques or passes that you find very useful? Open up a feature suggestion: [https://github.com/unitaryfund/ucc/issues](https://github.com/unitaryfund/ucc/issues) 

---

### **Get Started with UCC Today**

UCC is open source under the **GNU AGPL v3.0** license. It’s easy to get started:

**1\. Install UCC:**

```py
pip install ucc
```

**2\. Compile a Quantum Circuit:**

```py
from ucc import compile

compiled_circuit = compile(my_circuit)
```

**3\. Try Benchmarks and Examples:**  
Explore real-world performance metrics and sample programs in the [Tutorials & Benchmarks](https://github.com/unitaryfund/ucc/tree/main/benchmarks).

### **Contribute to UCC**

We’re building UCC as a community-driven project. Your contributions help improve it for everyone.

* **Create a Custom Compiler Pass:** Learn how in the [User Guide](https://github.com/unitaryfund/ucc/blob/main/docs/source/user_guide.rst#writing-a-custom-pass)  
* **Submit a bug report or feature request:** [On GitHub](https://github.com/unitaryfund/ucc/issues/new/choose)  
* **Contribute Code:** Follow the [Contribution Guide](https://ucc.readthedocs.io/en/latest/contributing.html) to submit new passes and improvements.  
* **Join the Discussion:** Connect with us on [Discord](http://discord.unitary.fund/) in the \#ucc channel \[to be created\].

### **Final Thoughts**

Our goal is for UCC to make quantum programming simpler, faster, and more scalable. Whether you’re running on hardware or developing your own compiler passes, we want UCC to give you the tools to succeed.

Get started today and help shape the future of quantum compilation\!

**Github:** [unitaryfoundation/ucc](https://github.com/unitaryfund/ucc)  
**Docs:** [UCC Documentation](https://ucc.readthedocs.io/)  
**Discord:** [Join the Conversation](http://discord.unitary.foundation/)  
**Stay Updated:** Sign up for our mailing list. \[ADD link\]
