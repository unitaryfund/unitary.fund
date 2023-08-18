[![Unitary Fund](https://img.shields.io/badge/Supported%20By-UNITARY%20FUND-brightgreen.svg?style=for-the-badge)](https://unitary.fund)

# Unitary Fund

Unitary Fund is a non-profit that supports the open development of the quantum technology ecosystem.

You can learn more about it at [unitary.fund](https://unitary.fund).

## Adding a Unitary Fund Badge

If you are a project affiliated with the Unitary Fund you can 
add the badge to your github project with the following snippet:

```
[![Unitary Fund](https://img.shields.io/badge/Supported%20By-UNITARY%20FUND-brightgreen.svg?style=for-the-badge)](https://unitary.fund)
```

## Writing a blog post 
To add a blog post, you just need to add a markdown file (`YYYY_your_title.md`) under the `src/content/blog/` folder. 
An example file is this [one on 2023 UF members](./src/content/blog/2023_members.md), which renders [here](https://unitary.fund/posts/2023_members/).
The following template post can be used to start from scratch:
```
---
title: post title
author: author one and author two
day: 7
month: 2
year: 2023
---

your markdown content
```

Once you open a pull request (PR) with edits, you get to see the preview via the Vercel automation. If you click on the "Visit preview" link that shows up in the bot comment, you can see how the edits will look like once the PR is merged. If they look good, you can ask for a review by calling one of the UF team members (e.g., @nathanshammah). 

### Adding images to a blog post
To add images, add the image file under the `public/images/` folder, and embed it in the markdown page using the `![](/images/your_image.png)` syntax.

## Adding a new grant 
To add a new grant, you just need to add a markdown file (`YYYY_project_name.md`) under the `src/content/grant/` folder. 
An example file is this [2023 grant to TorchQuantum](https://raw.githubusercontent.com/unitaryfund/unitary.fund/main/src/content/grant/2023_TorchQuantum.md). Make sure to edit the keys correctly, e.g. use [alpha-2 code](https://www.iban.com/country-codes) for the `country` key, as shown below
```
---
name: TorchQuantum
year: 2023
month: 4
day: 24
country: US
tags:
  - python
  - simulator
  - quantum
---
To **Hanrui Wang** to further develop **[TorchQuantum](https://github.com/mit-han-lab/torchquantum)**, a Quantum classical simulation framework based on PyTorch.
```
