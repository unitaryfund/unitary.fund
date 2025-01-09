---
title: "Aquapointer, a software package for quantum biology applications" 
author: Misty Wahl
day: 17
month: 10
year: 2024
tags: 
  - Q4Bio
  - Research
---

## Project overview

[Aquapointer](https://github.com/unitaryfund/aquapointer) is an open source software library developed by the Unitary Fund team with consortium partners [Pasqal](https://www.pasqal.com/) and [Qubit Pharmaceuticals](https://www.qubit-pharmaceuticals.com/) as part of the AQUA project.
The project was funded by [Wellcome Leap](https://wellcomeleap.org/) through the [Q4Bio program](https://wellcomeleap.org/q4bio/), a research program with the goal of accelerating the applications of quantum computing in human health. 
The Aquapointer library is a generalized, automated version of the framework developed over the course of the AQUA project, which is detailed in a recently published paper [^1]: _Leveraging analog quantum computing with neutral atoms for solvent configuration prediction in drug discovery_.
Aquapointer is designed as a computational tool for use in the pharmaceutical discovery and development process, specifically for leveraging quantum computing resources in the prediction of the locations of water molecules in protein cavities.

Proteins are complex molecules with cavities that can be occupied by water molecules, particularly in living tissue.
The presence of water molecules influences the binding of small molecules called ligands to specific protein sites, a problem of interest in drug discovery.
Protein solvation effects can be studied either by modeling the interactions experimentally, which is generally a costly and relatively inefficient process, or by using numerical models.
Classical numerical methods such as Monte Carlo or molecular dynamics can give some insight, but the computational complexity of these methods can be too large for certain hard cases. 

## Solving the protein cavity solvation problem

An alternative approach to finding the locations of water molecules is to perform classical simulations first to find the density distribution of water molecules, as represented in the image below on the left, through methods such as the 3D Reference Interactive Site Model (3D-RISM) [^2]. 
Using the 3D-RISM density function obtained in the previous step, we can define a discrete optimization problem whose solutions correspond to positions of water molecules, the combined results of which (3D-RISM and optimization) are depicted in the image below on the right.
![image depicting the high-level mapping from continous density distribution to discrete atomic coordinates](/images/aquapointer_3DRISM_motivation.png)
Image credit: AQUA project team

We found that the best formulation of the discrete optimization problem with solutions corresponding to positions of water molecules is a [quadratic unconstrained binary optimization (QUBO)](https://en.wikipedia.org/wiki/Quadratic_unconstrained_binary_optimization) problem.
The QUBO problem is a combinatorial optimization problem with numerous applications across a broad array of disciplines, including finance, economics, physics, and computer aided design [^3], as well as in the medical field, such as in diagnostic image classification [^4].
Furthermore, the close connection between the QUBO problem formulation and the Ising model make it a promising application for analog quantum computers.
To find the locations of water molecules in the protein cavity, we solve the QUBO formulation of the Gaussian mixture problem, where the center of each Gaussian corresponds to a location around which a water molecule oscillates. 
In the image below, the QUBO formulation of the Gaussian mixture problem is illustrated by side-by-side plots of the same density distribution as color contours with each center marked by a red X, the one on the right overlaid with initial guesses for the centers of the Gaussians, each marked by a blue X.

![image depicting mapping the problem to a QUBO formulation](/images/aquapointer_QUBO_plots.png)
Image credit: AQUA project team

## Aquapointer automates the pipeline of 3D-RISM density distribution to water molecule locations

To find the locations of water molecules in a protein cavity of interest, Aquapointer generates 2D slices of an input 3D-RISM density function, maps the slices to a QUBO problem, translates the QUBO to an analog pulse sequence or a digital circuit, and then calls the backend API and processes the results.
The analog workflow in Aquapointer uses [Pulser](https://github.com/pasqal-io/Pulser) for intermediate representations (IR) of the pulse sequences and for interfacing to supported backends, e.g. QuTiP.
The digital workflow uses Qiskit for IR and simulated backends.

![image demonstating the analog workflow in Aquapointer](/images/aquapointer_analogflow.png)
Image credit: AQUA project team

```python
water_postions = find_water_positions(canvases, executor, MockDevice, pulse_settings)
```

## Extending the library

Since we first introduced Aquapointer, we have upgraded it to include 3D-RISM density processing, in the form of the `slicing` and `densitycanvas` modules.
The `slicing` module takes a 3D-RISM density file and transforms it into 2D slices along user-specified planes. 
The `densitycanvas` module contains classes and functions for transforming the 2D slices or generating them from a probability distribution and mapping the density distributions into a QUBO formulation.

![image demonstating the slicing workflow in Aquapointer](/images/aquapointer_slicing.png)
Image credit: AQUA project team

```python
canvases = canvases = density_slices_by_planes(grid, slicing_points)
for canvas in canvases:
    canvas.filter_density(filter_settings={"filter_function": filter_fn, "sigma": sigma})
    canvas.crop_canvas(center, size) 
```

We have also created a template script for automating the workflow from 3D-RISM input file to positions of water molecules obtained from solving the QUBO.
For more information, check out Aquapointer's [documentation](https://aquapointer.readthedocs.io/en/latest/), and be sure to stay connected with Unitary Fund on our [Discord](https://discord.com/invite/JqVGmpkP96), [X](https://twitter.com/unitaryfund), and [LinkedIn](https://www.linkedin.com/company/unitary-fund/).

------------------------------------------------------

[^1]: Mauro D'Arcangelo, Louis-Paul Henry, Loic Henriet, Daniele Loco, Nicolai Gouraud, Stanislas Angebault, Jules Sueiro, Jerome Foret, Pierre Monmarche, and Jean-Philip Piquemal. Leveraging analog quantum computing with neutral atoms for solvent configuration prediction in drug discovery. _Phys. Rev. Res_ 6(4), (2024) [online](https://journals.aps.org/prresearch/pdf/10.1103/PhysRevResearch.6.043020)).
[^2]: Daniel J Sindhikara and Fumio Hirata. Analysis of biomolecular solvation sites by 3D-RISM theory. _J Phys Chem B_ Jun 6;117(22):6718-23 (2013) [online](https://pubmed.ncbi.nlm.nih.gov/23675899/).
[^3]: Gary Kochenberger, Jin-Kao Hao, Fred Glover, Mark Lewis, Zhipeng Lü, Haibo Wang, and Yang Wang. The unconstrained binary quadratic programming
problem: a survey. _J Comb Optim_ 28, 58–81 (2014) [online](https://leeds-faculty.colorado.edu/glover/454%20-%20xQx%20survey%20article%20as%20published%202014.pdf).
[^4]: Amandine Le Maitre, Mathieu Hatt, Olivier Pradier, Catherine Cheze-le Rest, and Dimitris Visvikis. Impact of the accuracy of automatic tumour functional volume delineation on radiotherapy treatment planning. _Phys Med Biol_ Sep 7;57(17), 5381-97 (2012) [online](https://pubmed.ncbi.nlm.nih.gov/22864012/).
