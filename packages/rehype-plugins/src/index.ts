import rehypePrismPlus from 'rehype-prism-plus';

import withCodeAttributes from './withCodeAttributes';
import withInlineHighlights from './withInlineHighlights';

import type { PluggableList } from 'unified';

const plugins: PluggableList = [
   rehypePrismPlus,
   withInlineHighlights,
   withCodeAttributes,
];

console.log('test from rehypePrismPlus');

export default plugins;
