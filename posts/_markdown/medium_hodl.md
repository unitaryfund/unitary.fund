[![Ayush Tambde](https://miro.medium.com/fit/c/96/96/1*HzoP0H_p6w03dx6YVNfwZQ.jpeg)

](https://medium.com/@atamb?source=post_page-----df0b4233f862--------------------------------)[Ayush Tambde](https://medium.com/@atamb?source=post_page-----df0b4233f862--------------------------------)Follow

Jun 28

·4 min read

An Introduction to Creating Quantum Oracles with HODL
=====================================================

![A block of code displaying code written in the HODL quantum programming language](https://miro.medium.com/max/1400/1*H80yBdaaV5mQcbGMPzeKbg.png)Grover’s algorithm in HODL

Overview
========

There are many languages and frameworks out there for writing quantum computing programs, such as Qiskit or Q#. In many of these, you can code with relative ease — until the time comes to write oracles. Many algorithms require black-box functions to work, and their implementation can involve some of the most complex, convoluted circuits you’ve ever seen.

Higher-Level Oracle Description Language, or HODL, is a programming language designed to make it easier to write oracles for quantum programs, providing a C-style interface through which we can code logic and arithmetic. It currently compiles to either OpenQASM 2.0, the Quantum Intermediate Representation (QIR) standard, or you can use it through a [Qiskit interface](http://google.com). HODL is generally not intended to be a complete quantum framework — rather it was designed to do one thing really well, and that’s writing oracles.

Why HODL?
=========

Let’s say for the sake of example that we want to write a program to perform the quantum search algorithm on a uniform superposition of 3 qubits. This means that all x from 0–7 are present with equal probability. We wish to use quantum search to find x where:

![](https://miro.medium.com/max/164/0*01BzEz2ZoZGka-xO.png)

For any real, positive value of y, the only solution for x is 0. I’ve chosen this particular example since it showcases multiple features of HODL, such as multiplication, comparison, and uncomputation. While this will likely be a real pain to write using current frameworks, even using existing libraries, HODL handles all the complicated bits, letting you focus on the more important parts of your program. For a more detailed comparison between current frameworks and HODL, check out this [paper](https://doi.org/10.48550/arXiv.2110.12487)¹.

So what does such a program look like in HODL? I’ll show you the code, and then we’ll dissect it line-by-line:

```
function some\_oracle(super var, int num) {  
   if(var \* num < num) {  
      mark(var,pi);  
   }  
}  
function main() {  
   super variable = 8;  
   some\_oracle(variable,4);  
   diffuse(variable);  
   measure variable;  
}
```

Okay, so let’s break this down:

The first line declares a function, called some\_oracle. This function accepts two parameters, a _super_ and an _int_. A “super” is a way to denote a quantum variable, vs. using “int” for a classical integer, and also provides a handy way of declaring uniform superpositions, as you can see in the first line of the main function.

The next block of code checks that the inequality condition holds, and if so, applies a phase of **π**. Due to the principle of superposition, this ensures that all terms that fit the condition will be “marked” with a negative amplitude.

That’s it! That’s our oracle fully written. The next block contains the “main” function, within which we declare a uniform superposition of three qubits, apply the oracle, call the diffusion operator, and measure the result.

Compilation
-----------

Now how do we actually compile and run this code? If you use MacOS, and have Homebrew installed, then simply just “brew install hodl”. It’s also available on Anaconda, with conda install -c at2005 hodl. Then, once you’ve added the executable to path, execute the following command:

```
hodl --target qasm -o out.qasm code\_file.hodl
```

to compile to OpenQASM 2.0, or:

```
hodl --target qir -o out.qir code\_file.hodl
```

for QIR compilation, where you can replace code\_file.hodl with whatever you choose to name your source file. After that, you can run out.qasm on whatever QASM-based system you want, and out.qir on a suitable QIR simulator.

What can HODL do?
=================

HODL is a compiled programming language, meaning that a program called a compiler parses the code and converts it into a format computers can understand.

*   Classical interpretation. For example, if the programmer has 2+2 tucked away somewhere out there in the program, it’s going to be interpreted to 4, prior to code-generation. This example may seem a bit trivial, but classical interpretation doesn’t just parse constant expressions, but also those containing pure classical variables. This means that constructs such as loops and classically-conditioned if-else statements are expanded out.
*   Register-size estimation — simply meaning you don’t need to keep track of how the sizes of your registers change throughout the program. It also ensures that ancillary registers are allocated with a sufficient number of qubits so that the program outputs the desired result.
*   Uncomputation and garbage collection. What’s also pretty nice is that after ancillary registers are used up, HODL uncomputes them back to zero and recycles them as required. This ensures the program doesn’t go awry due to unwanted interference!

Qiskit Library
==============

If you’re already working with another framework, such as Qiskit, and don’t want to work in two languages, then the hodl-qiskit library enables you to call HODL from inside Qiskit and output a QuantumCircuit object. You can read my [other post](https://medium.com/@atamb/writing-qiskit-oracles-with-hodl-377859287861) which provides a deeper dive into the topic.

Conclusion
==========

HODL is currently undergoing some serious development, while also being funded by Unitary Fund². There’s a lot to do, including writing documentation, fixing bugs, and making HODL a pretty handy and likeable tool for beginners and experts alike.

Notes
=====

\[1\] In the paper there are some slight syntactical differences between the implementation of the diffusion operator, and use of the “oracle” datatype, which has since been removed for simplicity purposes.

\[2\] [https://unitary.fund/grants.html](https://unitary.fund/grants.html)

_Ayush Tambde is a secondary school student living in Dublin, Ireland. He is the author of the HODL language, and has received a grant from Unitary Fund to continue work on it._
