---
title: QUARC: A Hybrid System for Bounded Model Checking
date: February 2, 2023
author: Christoph Kirsch and Stefanie Muroya Lei
---

Bounded Model Checking (BMC) is a well-established technique used to ensure the correctness of critical software. Some examples are verifying properties of software systems and malware detection. However BMC techniques do not generally scale. Thereafter, the aim of our project is to develop a compiler that encodes efficiently classical programs so that quantum computers can help accelerating bounded model checking even in the NISQ-era.

QUARC is a compiler that is included in the [Unicorn toolchain](https://github.com/cksystemsgroup/unicorn). While Unicorn provides a word-level representation and some word-level optimizations such as the integration of powerful SAT and SMT solvers, QUARC takes this word-level representation to generate an oracle for quantum computers so that we can search for inputs that may cause that certain properties of programs are not satisfied. More concretely, QUARC searches for inputs to programs that cause division by zero, invalid memory accesses, or exit codes different than 0.

For example, if you look at the following pseudocode

```C

int main() {
   int x;
   read_input(&x); // read input and store it in x

   if (x == 100) {
      return 1;
   }
   return 0;
}

```

the oracle that QUARC produces will evaluate to true only when the qubits that represent <i>x</i> are equal to 100, because for all other value of <i>x</i> the exit code will be 0.

During the grant, we designed QUARC such that it does qubit level optimizations, reduces as much as it can the width of multi-controlled X gates, and also implements an algorithm to reuse ancillae. Moreover, we focus the most in reducing the domain of the function that the oracle is representing so fewer iterations are needed to find the input(s) to programs that cause specific machine states.

Right now QUARC can deal with only a subset of RISC-V, that even though is Turing-complete, we are still working to cover all of RISC-V. Therefore, since RISC-V is applicable to all languages compiled by GCC, QUARC targets a wide public that wants to make their software safer. Moreover, we are writing a paper for QUARC and polishing and optimizing our algorithm for reusing ancillae. As far as we know, QUARC is the first hybrid bounded-model checking and we believe there are certain kind of programs that can get a substancial speedup because of QUARC's encoding.

You can try QUARC with rust using this [link](https://github.com/cksystemsgroup/unicorn/tree/opt-quarc-paper), and also with python by checking this [link](https://github.com/cksystemsgroup/unicorn/tree/opt-quarc-paper/unicorn_api).

Finally, QUARC has help us explain concepts such as unitary matrices, oracles, qubits, superposition to computer science students doing their master's in topics related to formal methods. This is due to the fact that bounded model checking is deeply related with symbolic execution, and symbolic execution is a nice way to perceive quantum parallelism.

We thank very much UnitaryFund for their support. The grant allowed us to push further QUARC, which was initially only in our TO-DO list. The grant motivated us to do even more than was expected since we ended developing an algorithm that reduced substancially the number of ancillae that the final quantum program requires.

The unicorn team.

