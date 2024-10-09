---
title: "Aquapointer, a software package for quantum biology applications" 
author: Misty Wahl
day: 11
month: 10
year: 2024
tags: 
  - Q4Bio
  - Research
---

[Aquapointer](https://github.com/unitaryfund/aquapointer) is an open source software library developed by the Unitary Fund team with consortium partners [Pasqal](https://www.pasqal.com/) and [Qubit Pharmaceuticals](https://www.qubit-pharmaceuticals.com/).
The project was funded by [Wellcome Leap](https://wellcomeleap.org/) through the [Q4Bio program](https://wellcomeleap.org/q4bio/), a research program with the goal of accelerating the applications of quantum computing in human health. 
The Aquapointer library is a generalized, automated version of the framework developed over the course of the project, detailed in a recently published paper [^1]: _Leveraging analog quantum computing with neutral atoms for solvent configuration prediction in drug discovery_.
Aquapointer is designed as a computational tool for use in the pharmaceutical discovery and development process, specifically for leveraging quantum computing resources to predict the locations of water molecules in protein cavities.

Proteins are complex molecules with cavities that can be occupied by water molecules, particularly in living tissue.
The presence of water molecules influences the binding of small molecules called ligands to specific protein sites, a problem of interest in drug discovery.
Protein solvation effects can be studied either by modeling the interactions experimentally, which is generally a costly and relatively inefficient process, or by using numerical models.
Classical numerical methods, such as Monte Carlo or molecular dynamics, can give some insight but the computational complexity of these methods can be too large for certain hard cases. 
An alternative approach is to find first the density distribution of water molecules, through methods such as the [3D Reference Interactive Site Model (3D-RISM)](https://pubmed.ncbi.nlm.nih.gov/23675899/). 
By looking at 2D slices of the 3D-RISM density function, we can define a discrete optimization problem (per slice) whose solutions correspond to positions of water molecules.

Aquapointer generates 2D slices of an input 3D-RISM density function, maps the slices to a QUBO problem, translates the QUBO to an analog pulse sequence or a digital circuit, and then calls the backend API and processes the results.
The analog workflow in Aquapointer uses [Pulser](https://github.com/pasqal-io/Pulser) for intermediate representations (IR) of the pulse sequences and for interfacing to supported backends, e.g. QuTiP.
The digital workflow uses Qiskit for IR and simulated backends.

![image demonstating the analog workflow in Aquapointer](/images/aquapointer_analogflow.png)

```python
water_postions = find_water_positions(canvases, executor, MockDevice, pulse_settings)
```

Since we first introduced Aquapointer, we have upgraded it to include 3D-RISM density processing, in the form of the `slicing` and `densitycanvas` modules.
The `slicing` module takes a 3D-RISM density file and transforms it into 2D slices along user-specified planes. 
The `densitycanvas` module contains classes and functions for transforming the 2D slices or generating them from a probability distribution and mapping the density distributions into a QUBO formulation.

![image demonstating the slicing workflow in Aquapointer](/images/aquapointer_slicing.png)

```python
canvases = canvases = density_slices_by_planes(grid, slicing_points)
for canvas in canvases:
    canvas.filter_density(filter_settings={"filter_function": filter_fn, "sigma": sigma})
    canvas.crop_canvas(center, size) 
```

We have also created a template script for automating the workflow from 3D-RISM input file to positions of water molecules obtained from solving the QUBO.
For more information, check out Aquapointer's [documentation](https://aquapointer.readthedocs.io/en/latest/), and be sure to stay connected with Unitary Fund on our [Discord](https://discord.com/invite/JqVGmpkP96), [X](https://twitter.com/unitaryfund), and [LinkedIn](https://www.linkedin.com/company/unitary-fund/).

------------------------------------------------------

[^1]: Mauro D'Arcangelo, Louis-Paul Henry, Loic Henriet, Daniele Loco, Nicolai Gouraud, Stanislas Angebault, Jules Sueiro, Jerome Foret, Pierre Monmarche, and Jean-Philip Piquemal. Leveraging analog quantum computing with neutral atoms for solvent configuration prediction in drug discovery. _Phys. Rev. Res_, (2024) (https://journals.aps.org/prresearch/pdf/10.1103/PhysRevResearch.6.043020)).

