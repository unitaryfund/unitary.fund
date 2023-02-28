---
title: Automatically running QED-C benchmarks on Metriq
date: 28 Feb 2023
author: Metriq Team
---

We are excited to announce the integration of an automated pipeline to add
state-of-the-art benchmark from the Quantum Economic Development Consortium
([QED-C](https://quantumconsortium.org/)) into
[**Metriq**](https://metriq.info/), the open platform that makes transparent,
accessible benchmarks available to everyone in the quantum computing community.

The Technical Advisory Committee (TAC) for Standards and Performance Metrics
from QED-C provided an open-source suite of quantum benchmarks
([GitHub](https://github.com/SRI-International/QC-App-Oriented-Benchmarks)) to
measure the effectiveness of quantum computing hardware for specific
applications (further information provided in this
[preprint](https://arxiv.org/abs/2110.03137)). This provided some of the first
application-oriented benchmarks that were made public with supporting data along
with a preprint, an incredibly valuable asset to the benchmarking community.
Recently, the QED-C benchmarks suite was updated and new optimization
benchmarks ([preprint](https://arxiv.org/abs/2302.02278)).

The results of running these benchmarks can be found via this [Zenodo
posting](https://zenodo.org/record/6972744#.Y9v-oBzMJkg).  On
[Metriq](https://metriq.info/), we have integrated these results [into a
submission](https://metriq.info/Submission/14) that captures these results.
While this submission on Metriq captures the results obtained by QED-C it also
is a “living” result in that it is *automatically* updated with benchmarks
obtained by running the QED-C code on a variety of hardware offerings. 

On [Metriq](https://metriq.info/), we have established an [automated
pipeline](https://github.com/unitaryfund/metriq-api/tree/main/benchmark) that
is able to run and update our submission via a
[fork](https://github.com/unitaryfund/QC-App-Oriented-Benchmarks) of the QED-C
benchmarking suite. This pipeline enables anyone to automatically run
benchmarks for a specific algorithm, hardware provider, and quantum processor.
This allows the Metriq community to continually extend the benchmarking
foundation provided by QED-C to expand their results by running on further
hardware providers to obtain up-to-date results.

The backbone of the pipeline is powered by the
[metriq-client](https://github.com/unitaryfund/metriq-client) project. This
client allows the user to interface with the Metriq platform via a Python API.
The user can perform queries or upload batched results via a Python script for
submissions that may entail a sizeable amount of results that would be
cumbersome to upload manually via the website.

Many new results have been added to the
[QED-C](https://metriq.info/Submission/14) submission for the
[Bernstein-Vazarani](https://metriq.info/Task/150) task on Metriq thanks to the
automatic QED-C to Metriq pipeline. 

The automated QED-C to Metriq pipeline will be continuing to run on more
algorithms and platforms to generate further benchmarking results to be
displayed on [Metriq](https://metriq.info/)!

