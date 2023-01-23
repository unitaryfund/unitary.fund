---
title: QUARC
date: January 23, 2023
author: Christoph Kirsch and Stefanie Muroya Lei
---

Bounded Model Checking (BMC) is a well-established technique used to ensure the correctness of critical software. Given a number *n* representing the number of state transitions, it builds the Finite State Machine (FSM) of a program and searches for the input(s) that make a set *S* of machine states (e.g. division by zero, non-zero exit codes) reachable within *n* state transitions.


BMC algorithms use heuristics and Satisfiability Modulo Theory (SMT) solvers that do not scale in general since all solve an SAT formula whose solutions grow exponentially in the number of paths of length *n* due to branching and loop conditions that depend on input values
 

This is the reason why we created QUARC a backend that is included in the [Unicorn toolchain](https://github.com/cksystemsgroup/unicorn). Unicorn supports RISC-V, and it takes binaries of arbitrary programs to produce an inner representation of an FSM that it then optimizes through SAT and Satisfiability-Modulo Theory Solvers.

QUARC takes as input a number *n* and the FSM of a program to produce an oracle that represent *n* state transitions of these programs. This oracle outputs true whenever some state of *S* happens in *n* or less state transitions.

On its side, QUARC does bit level optimizations, reduces as much as it can the width of MCX gates, and also implements an algorithm to reuse ancillae. However, what QUARC focuses the most, is to reduce the domain of the function that the oracle is representing so fewer iterations are needed to find the input(s) that cause any state of *S*.

In general, the oracle will output true with bad memory accesses, non-zero exit codes, or whenever a division by zero happens.

Finally, QUARC has help us explain concepts such as unitary matrices, oracles, qubits, superposition to computer science students doing their master's in topics related to formal methods. This is due to the fact that bounded model checking is deeply related with symbolic execution, and symbolic execution is a nice way to perceive quantum parallelism.

The unicorn team.

