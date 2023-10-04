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

# This is a heading style one

**This is a featured paragraph it cannot contain bold text but can contain [links](https://www.unitary.fund).**

More text

::image[d394zg4utwqxynenamqf]

## This is a heading in heading style two

This is a standard paragraph with a [hyperlink](https://www.example.com). **This is bold paragraph text**.

- this is a list item
- this is **bold** list item
- this is a long list item which has lots of words in it and will probably break onto a second or even a third line so we can make sure it looks as it is intended too. Can even have multiple sentences within a list item.
- this is a list item with a [link](https://unitaryhack.dev/) added in it.

### This is a heading in heading style three introducing a video

https://www.youtube.com/watch?v=dB_3R84ewig

#### This is a heading in heading style four


## Including code snippets with gists
A supported way to include code snippets is by embedding gists.
Gists are code snippets that you can create on Github.
Learn how to create one [here](https://docs.github.com/en/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists), and don't forget to ensure it is public!
Once created, use the hash from the gist URL with the syntax below.


::gist[matt-lourens/6cc14d37209de07abd707804f1b0219e/]
```

Once your post is ready, open a pull request (PR)!

The Vercel automation will create a preview you can access by clicking the "Visit preview" link that shows up in the bot comment.
If the changes look good, request a review by tagging one of the UF team members (e.g., `@nathanshammah`).

## Adding images

To add an image in a page, there are two options:

1. **(No Code option):** Go to https://unitary-fund.vercel.app/author/image and upload your desired image.
   Copy the code it returns after upload, e.g, d394zg4utwqxynenamqf, and use the syntax `::image[d394zg4utwqxynenamqf]` to insert it. Note that this option is the required one for adding a cover image to a new `event`.

2. Upload the image to `public/images/` and embed it into the desired page using the `![alt text](/images/your_image.png)` syntax.

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

## Run the website locally

Information on how to run the website locally are given in the [developer docs](https://github.com/unitaryfund/unitary.fund/wiki/Developer-docs) wiki.
