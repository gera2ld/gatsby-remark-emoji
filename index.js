const visit = require('unist-util-visit');
const EmojiConvertor = require('emoji-js');

module.exports = async ({ markdownAST }, pluginOptions) => {
  const emoji = new EmojiConvertor();
  Object.assign(emoji, {
    replace_mode: 'unified',
  }, pluginOptions);

  visit(markdownAST, 'text', (node) => {
    node.value = emoji.replace_colons(node.value);
  });
};
