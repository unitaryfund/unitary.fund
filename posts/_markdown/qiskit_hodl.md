[![Ayush Tambde](https://miro.medium.com/fit/c/96/96/1*HzoP0H_p6w03dx6YVNfwZQ.jpeg)

](https://medium.com/@atamb?source=post_page-----377859287861--------------------------------)[Ayush Tambde](https://medium.com/@atamb?source=post_page-----377859287861--------------------------------)Follow

2022-08-19

·3 min read

Writing Qiskit oracles with HODL
================================

Create oracle circuits using the Higher-Level Oracle Description Language (HODL) to Qiskit interface
----------------------------------------------------------------------------------------------------

![](https://miro.medium.com/max/1400/1*XpKM5eXwBCfTeWM_1ntaIA.png)A quantum circuit for the Deutsch-Jozsa algorithm containing an oracle U\_f

Overview
--------

If you have written quantum programs before, then you have probably encountered the need to create oracles, or black-box subroutines within many quantum algorithms whose construction is generally left for the programmer to figure out. The most common example is Grover’s algorithm, whereby the search constraint itself is encoded within an oracle. In vanilla Qiskit, trying to write oracles that encode mathematical and/or logical operations isn’t exactly straightforward, but the process can be streamlined using the HODL language and associated Python library.

HODL is a language that makes it super-easy to write C-style logic and arithmetic, which is translated to either OpenQASM 2.0 or Quantum Intermediate Representation (QIR). The hodl-qiskit library enables one to call the HODL compiler inline within a Qiskit program, and receive a QuantumCircuit object.

In this post I’ll describe how we can create oracles for Qiskit using HODL, working through a full example of Grover’s algorithm.

Prerequisites
-------------

Before starting this tutorial, make sure you have the following installed:

*   Anaconda distribution
*   Python 3.8
*   Qiskit (latest version, preferably)
*   HODL (this can be installed with $ conda install -c at2005 hodl)
*   hodl\_qiskit library ($ conda install -c at2005 hodl\_qiskit)

Note: Linux users may need to clone the [GitHub Repository](https://github.com/at2005/HODL) and build locally instead of installing the raw binaries from Anaconda.

Let’s start
-----------

The first thing to do is to import the necessary libraries:

```
from qiskit import \*  
from src.hodl\_qiskit import \*
```

Now we need to write our oracle. I’ll drop what the code looks like below, and then we’ll break it down:

```
oracle\_instance = init\_oracle(""" # "super" denotes quantum variables, "mark" essentially applies a  phase function hodl\_oracle(super a) {  
       if(a > 5) {  
           mark(a,pi);  
       }  
   }""")
```

The init\_oracle function is used to create a HODLOracle object. Since HODL oracles often depend on the input width, we first have to create a “general” wrapper around the oracle before passing arguments and compiling. (This also means that you can write an oracle once and use everywhere with different input sizes)

The “init\_oracle” function accepts as an argument, a string, containing a HODL function. Our particular block of code declares a function named hodl\_oracle, accepts a quantum variable as input, checks if it is greater than 5, and if so then marks it with a phase of pi.

Compilation
-----------

That’s our oracle written! Now it’s time to actually use this within Qiskit. To do this we use the HODLOracle.to\_circ method, which accepts as input an array containing the oracle arguments, compiles the oracle, and returns a Qiskit QuantumCircuit object. For now we’ll instantiate the oracle with an input of width 3 qubits:

```
qr = QuantumRegister(name="reg0", size=3)  
circ = oracle\_instance.to\_circ(\[qr\])
```

Use within Qiskit
-----------------

Now, you might wonder what to do next, and honestly, using this circuit becomes very easy with the Qiskit compose function:

```
qc = QuantumCircuit(circ.num\_qubits, qr.size)\# initialize superposition  
qc.h(range(circ.num\_qubits))qc.compose(circ,range(circ.num\_qubits), inplace=True)\# Grover diffusion operator  
qc.h(range(circ.num\_qubits))  
qc.x(range(circ.num\_qubits))  
qc.h(2)  
qc.ccx(0,1,2)  
qc.h(2)  
qc.x(range(circ.num\_qubits))  
qc.h(range(circ.num\_qubits))\# measurement  
qc.measure(range(circ.num\_qubits), range(circ.num\_qubits))
```

Results
-------

Executing the circuit on a quantum simulator, we get the following histogram:

![A histogram showing results from a quantum computing simulator](https://miro.medium.com/max/922/1*_pDRwTYB19xzrKHdbAq-lQ.png)Measurment results

Indeed these are the states we expected, since 6 and 7 are both greater than 5.

Conclusion
----------

Writing oracles with plain Qiskit can get a bit tedious. Thankfully, HODL is there to automate the boring bits, and let you focus on the more important and challenging parts of programming quantum computers. If you want more of a deep-dive into HODL, I recommend [this post.](https://medium.com/@atamb/an-introduction-to-creating-quantum-oracles-with-hodl-df0b4233f862)

_Ayush Tambde is a secondary school student living in Dublin, Ireland. He is the author of the HODL language, and has received a grant from Unitary Fund to continue work on it._
