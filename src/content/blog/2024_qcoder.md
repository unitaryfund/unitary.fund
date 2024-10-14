---
title: QCoder - A platform for quantum competitive programming
author: Kein Yukiyoshi
day: 20
month: 10
year: 2024
tags: 
  - quantum algorithms
  - qiskit
  - python
---

<p align="center">
    <img src='../../images/2024-qcoder/qcoder_logo.png' alt='QCoder Logo' width=800/>
</p>

In recent years, quantum algorithms have attracted attention for their theoretical promise of significant efficiency gains.
Shor's algorithm, for example, can factor integers with exponentially fewer queries than known classical algorithms.
Learning about these algorithms is exciting, but staying motivated can be challenging, especially for those without an academic background who are learning for fun.
Textbooks and academic papers are often too complex for beginners, making it hard to follow along.
Even if you succeed in understanding and implementing an algorithm, running it on today’s quantum computers in scalable settings is typically impossible.

In response to these challenges, we have developed <a href="https://www.qcoder.jp/" target="_blank">**QCoder**</a>, a platform for quantum competitive programming.
QCoder is the quantum counterpart to conventional competitive programming platforms such as Codeforces, Google Code Jam, and ICPC.
It allows users to learn quantum algorithms and practice quantum programming simply by participating in competitions.

# Getting Started

## Step 1: Environment Setup
we currently support <a href="https://github.com/Qiskit/qiskit/" target="_blank">Qiskit</a> as the available quantum programming language.
For the best coding experience, we recommend setting up a local Qiskit environment on your computer. This setup will provide useful features such as autocompletion and linting to improve productivity and code quality.

To get started, please refer to the <a href="https://docs.quantum.ibm.com/guides/" target="_blank">official Qiskit documentation</a> for detailed installation instructions and guidelines.

## Step 2: User Registration
To participate in contests and submit your solutions, you need to sign up via the <a href="https://www.qcoder.jp/auth/signup" target="_blank">registration page</a>.

## Step 3: Dive In and Enjoy!
You now have access to all the content on QCoder. We suggest starting by participating in past contests. While you may find some parts difficult initially, you'll gain a deeper understanding as you solve problems and refer to the provided editorials. QCoder offers contests for everyone, from complete beginners to seasoned experts.

# Sample Problem
To help you get started, let's walk through a sample problem. Please note that this is just one example, and we offer both easier and more challenging problems. You can explore and choose the one that suits your level by visiting <a href="https://www.qcoder.jp/" target="_blank">QCoder</a>.

## Problem Statement
You are given an integer $n$, representing the number of qubits.
Your task is to implement a quantum circuit with minimal circuit depth that prepares a <a href="https://en.wikipedia.org/wiki/Greenberger%E2%80%93Horne%E2%80%93Zeilinger_state" target="_blank">GHZ state</a> using $n$ qubits.

The GHZ state is defined as
$$
\ket{\mathrm{GHZ}} = \frac{1}{\sqrt{2}} (\ket{0\cdots0}_n - \ket{1\cdots1}_n).
$$

The submitted code should follow the format below:
```python
from qiskit import QuantumCircuit
 
 
def solve(n: int) -> QuantumCircuit:
    qc = QuantumCircuit(n)
    # Write your code here:
 
    return qc
```

## Solution 1
<details>
<summary>Open</summary>
The most straight forward solution can be described as follows:

First, apply the Hadamard gate to the first quantum bit.
$$
\begin{equation}
\ket{000 \cdots 0} \xrightarrow{H(0)}  \frac{1}{\sqrt{2}} \lparen \ket{000 \cdots 0} + \ket{100 \cdots 0} \rparen
\end{equation}
$$
Next, we transform the state $\ket{100 \cdots 0}$ to $\ket{110 \cdots 0}$.
To achieve this, apply a controlled-X gate (CNOT gate) with the first quantum bit as the control bit and the second quantum bit as the target bit:
$$
\begin{equation}
\frac{1}{\sqrt{2}} \lparen \ket{000 \cdots 0} + \ket{100 \cdots 0} \rparen \xrightarrow{CX(0,1)}  \frac{1}{\sqrt{2}} \lparen \ket{000 \cdots 0} + \ket{110 \cdots 0} \rparen
\end{equation}
$$
By continuing to apply the controlled-X gate until the $n$-th qubit is the target bit, we can prepare the GHZ state.
$$
\begin{equation}
\frac{1}{\sqrt{2}} \lparen \ket{000 \cdots 0} + \ket{110 \cdots 0} \rparen \xrightarrow{CX(0,2)} \, \cdots \xrightarrow{CX(0,n-1)} \frac{1}{\sqrt{2}} (\ket{0...0} + \ket{1...1})
\end{equation}
$$
Summarizing these operations, we obtain the following circuit when $n = 4$:

<p align="center">
    <img src='../../images/2024-qcoder/QPC002_A3_circuit.png' width=500/>
</p>

Below is a sample program:
```python
from qiskit import QuantumCircuit
 
 
def solve(n: int) -> QuantumCircuit:
    qc = QuantumCircuit(n)
 
    qc.h(0)
 
    for i in range(1, n):
        qc.cx(0, i)
 
    return qc
```

</details>

## Solution 2
<details>
<summary>Open</summary>

In the solution 1, the depth of the quantum circuit is $n$.
What kind of quantum circuit should be designed to further reduce the depth of the quantum circuit?

Let's examine the following example with 8 qubits.

<p align="center">
    <img src='../../images/2024-qcoder/QPC002_A5_circuit.png' width=600/>
</p>

In this case, the operations within each block, divided by the boundaries on the quantum circuit, act on different qubits, allowing them to be executed simultaneously. Therefore, the depth of each block is 1.
Thus, the depth of the quantum circuit above is 4.

By generalizing this circuit, the depth of the quantum circuit becomes $\lceil \log_{2}{n} \rceil + 1$, which satisfies the given constraint.

Below is a sample program:
```python
import math

from qiskit import QuantumCircuit


def solve(n: int) -> QuantumCircuit:
    qc = QuantumCircuit(n)

    qc.h(0)

    for i in range(int(math.log2(n)) + 1):
        for j in range(2**i):
            if 2**i + j == n:
                break
            qc.cx(j, 2**i + j)

    return qc
```

</details>

## Note
Almost the same problem was featured in the <a href="https://www.qcoder.jp/contests/QPC002/" target="_blank">QCoder Programming Contest 002</a>. In Problem A3, both solutions 1 and 2 are accepted. However, in Problem A5, only Solution 2 is accepted, as it meets the stricter depth constraints. If you're interested, feel free to submit your solution and see how you do!

# Conclusion
<a href="https://www.qcoder.jp/" target="_blank">QCoder</a> is a quantum competitive programming platform, offering opportunities to challenge and advance your skills in quantum computing.
We are excited to announce that our 3rd contest is scheduled for November (date TBD). We look forward to your participation!

We would like to express our sincere gratitude to the Unitary Fund for supporting the internationalization of this project. We are actively seeking support to continue providing this platform to the quantum computing community. If you're interested in collaborating or offering support, please reach out to us through our <a href="https://www.qcoder.jp/contact" target="_blank">contact page</a>.
