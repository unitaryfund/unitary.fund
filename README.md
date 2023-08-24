# Unitary Fund

Unitary Fund is a non-profit that supports the open development of the quantum technology ecosystem.

Learn more about what we do at [`unitary.fund`](https://unitary.fund).

## Adding a Unitary Fund Badge

If you are a project affiliated with Unitary Fund you can add the badge to your GitHub project using the following snippet:

```
[![Unitary Fund](https://img.shields.io/badge/Supported%20By-UNITARY%20FUND-brightgreen.svg?style=for-the-badge)](https://unitary.fund)
```

This will be rendered as:

[![Unitary Fund](https://img.shields.io/badge/Supported%20By-UNITARY%20FUND-brightgreen.svg?style=for-the-badge)](https://unitary.fund)

## Writing a blog post

To add a blog post, create a new markdown file (`YYYY_your_title.md`) in the `src/content/blog/` directory.
The following template post can be used to start from scratch, or check out one of the existing blog posts ([markdown example](src/content/blog/2023_members.md), [live render](https://unitary.fund/posts/2023_members/)).

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

Once your post is ready, open a pull request (PR)!
The Vercel automation will create a preview you can access by clicking the "Visit preview" link that shows up in the bot comment.
If the changes look good, request a review by tagging one of the UF team members (e.g., `@nathanshammah`).

### Adding images to a blog post

To add an image in a document, upload the image to `public/images/`, and embed it into the desired page using the `![alt text](/images/your_image.png)` syntax.

## Adding a new grant

To add a new grant, create a markdown file (`YYYY_project_name.md`) under the `src/content/grant/` folder.
An example file is this [2023 grant to TorchQuantum](src/content/grant/2023_TorchQuantum.md).
Make sure to edit the keys correctly, e.g. use [alpha-2 code](https://www.iban.com/country-codes) for the `country` key, as shown below

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
