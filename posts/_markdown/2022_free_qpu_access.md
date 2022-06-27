---
title: How to Run Programs on Quantum Computers for Free
date: 27 June 2022
author: Nathan Shammah
---

The Unitary Fund team and Advisory Board often get asked this question: "How can I run run programs on quantum computers?"

In the current landscape there is a mixed offer of cloud-access quantum computing services. If you know where to look, you can find ways to run programs for free. This is a short guide to make some available resources emerge from the quantum fog.

In the old times, it was only, or mainly, the IBM Quantum Experience.

Over time, more receently, some differentiators have emerged between quantum processing unit (QPU) providers and cloud services providers, with some overlap. For example, IBM Q IBMQ processors can be accessed via the IBM Q cloud. But there is a full matrix of configurations, with QPU providers being available on multiple service providers, such as IonQ's QPU available on Azure Quantum, AWS Braket and

To this complexity, add the intricacy that often you want to code in a language or that you're familiar with: so you'll need to add another column to your table, that of the quantum circuit formalism: Recently


# IBM Q

IBMQ is one of the most robust and consistently with an up-and-running a-la-carte selection of QPUs (although some get routinely decommissioned, such as the beloved `ibmq-armonq`, the [first to provide pulse-level access](https://www.youtube.com/watch?v=CcB6nRQNB7Y)). Many IBM Q QPUs are free to access, while some aree only for partnerships.


# AWS Braket
AWS has many devices but not a default mechanism to provide new users with free access or free credits. They run a wider [cloud credit for research program](https://aws.amazon.com/government-education/research-and-technical-computing/cloud-credit-for-research/) that includes quantum, although you need to be full-time in academia to apply. Unitary Fund obtained several credits by asking, so it is always worth trying to contact the Braket team.


# Azure Quantum
Azure Quantum provides 500$ free per each provider (IonQ, Quantinuum, etc.) upon signing in + more credits for approved [research projects](https://docs.microsoft.com/en-us/azure/quantum/credits-faq).

# IonQ Credits
IonQ has a [research credit program](https://ionq.com/programs/research-credits) with the call closing soon, on June 30th 2022.

# Quantum Inspire
[Quantum Inspire](https://www.quantum-inspire.com/) is an initiative by TU Delft in The Netherlands. As far as I know, it is the only provider of quantum-dot-based spin qubits publicly available on the cloud, for free. The downside is that, last time I checked, they have sort of a cQASM interface that is not exactly OpenQASM. Plus, the devices can be off the grid for maintainenance.

# Xanadu
Xanadu recently launched the [free cloud access](https://platform.xanadu.ai/auth/realms/platform/protocol/openid-connect/registrations?client_id=public&redirect_uri=https%3A%2F%2Fcloud.xanadu.ai%2Flogin&response_type=code), upon sign-up form for Borealis, in conjuction with the publication of their results in Nature.