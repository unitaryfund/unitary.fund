import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';
import type { Root } from 'mdast';

const remarkOnlyStrong: Plugin<[], Root> = () => {
  return (tree, file) => {
    visit(tree, 'paragraph', (node) => {
      // We're interested in paragraphs with exactly one child
      if (node.children.length === 1) {
        const child = node.children[0];

        // And this child should be of type 'strong'
        if (child.type === 'strong') {
          // Now we add a `data` field to the paragraph with a `hProperties` object.
          // Remark stringifies this as a 'class' attribute on the corresponding HTML element.
          node.data = node.data || {};
          node.data.hProperties = {
            // @ts-ignore
            ...node.data.hProperties,
            className: [
              // @ts-ignore
              ...(node.data.hProperties?.className || []),
              'only-strong',
            ],
          };
        }
      }
    });
  };
};

export default remarkOnlyStrong;
