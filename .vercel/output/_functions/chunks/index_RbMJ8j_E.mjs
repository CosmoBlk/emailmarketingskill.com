import { p as createVNode, F as Fragment, az as __astro_tag_component__ } from './astro/server_DrUG3HW_.mjs';
import 'clsx';

const frontmatter = {
  "title": "Email Marketing Skill for Claude Code",
  "description": "The most comprehensive email marketing knowledge base, distilled into a Claude Code skill. 908 sources, 55,000 words, 19 industry playbooks. Free and open source.",
  "template": "splash",
  "hero": {
    "title": "Email Marketing Skill for Claude Code",
    "tagline": "The most comprehensive email marketing knowledge base ever compiled."
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/docs/index.mdx";
const file = "/Users/georgehartley/emailmarketingskill.com/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/georgehartley/emailmarketingskill.com/src/content/docs/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
