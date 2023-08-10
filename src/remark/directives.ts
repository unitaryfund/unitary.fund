import 'remark-directive';
import type { Plugin } from 'unified';
import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import { Resize } from '@cloudinary/url-gen/actions/resize';
import { cld } from '../util/cloudinary';
import socialLinks from '../data/social.json';

export const imageDirective: Plugin<[], Root> = () => {
  return (tree, file) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        if (node.name !== 'image') return;

        const data = node.data || (node.data = {});

        if (node.children?.length === 1 && node.children[0].type === 'text') {
          const imageId = node.children[0].value?.trim();
          const image = cld.image(imageId);
          image.resize(Resize.scale().width(800));

          data.hName = 'img';
          data.hProperties = {
            src: image.toURL(),
          };
          node.children = [];
        }
      }
    });
  };
};

export const gistDirective: Plugin<[], Root> = () => {
  return (tree, file) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        if (node.name !== 'gist') return;

        const data = node.data || (node.data = {});

        if (node.type === 'textDirective')
          file.fail('Text directives for `gist` not supported', node);

        if (node.children?.length === 1 && node.children[0].type === 'text') {
          const gistPath = node.children[0].value
            ?.trim()
            .replace(/^\/*/, '')
            .replace(/\/*$/, '');

          data.hName = 'script';
          data.hProperties = {
            src: `https://gist.github.com/${gistPath}.js`,
          };
          node.children = [];
        }
      }
    });
  };
};

export const socialDirective: Plugin<[], Root> = () => {
  return (tree, file) => {
    visit(tree, (node) => {
      // console.log(node);

      if (
        (node.type === 'textDirective' ||
          node.type === 'leafDirective' ||
          node.type === 'containerDirective') &&
        'name' in node
      ) {
        if (!node.name.startsWith('social-link-')) return;

        const socialLink = node.name.replace('social-link-', '');

        if (socialLink in socialLinks) {
          const data = node.data || (node.data = {});

          data.hName = 'a';
          data.hProperties = {
            href: socialLinks[socialLink],
          };
        }
      }
    });
  };
};
