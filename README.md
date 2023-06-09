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

Blog posts are written in markdown and a template for can be found under `posts/_markdown/` and images for the post should be added to `images` at root.
Make a PR to this site with your new markdown file and the team can review and merge it!

If you want to see how your blog post looks like, you can use pandoc and run the following command in the `posts` folder:

```bash
pandoc --standalone --template pandoc-template.html ./_markdown/your_post.md -o your_post.html
```

To view the entire site hosted by Python locally, run the following command:

```bash
python -m http.server 8000 --bind 127.0.0.1
```
