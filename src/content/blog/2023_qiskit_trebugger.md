---
title: Timeline Debugger for the Qiskit Transpiler
author: Harshit Gupta
day: 20
month: 9
year: 2023
---

Qiskit transpiler is an important tool used to map any arbitrary quantum circuit into a physically runnable one, compatible with the properties of its target quantum backend. This process, called transpilation, includes expanding a circuit to the backend's qubit count, breaking down higher level quantum operations in terms of the supported basis set, and routing qubits according to the chip connectivity and optimization of the final circuit. While Qiskit's transpiler has built-in logging and callback mechanisms to help users understand about transpilation, most users don’t know about these methods, nor have sufficient knowledge about using them. This is where the project comes with an aim to provide an **insight into the qiskit transpiler**.
