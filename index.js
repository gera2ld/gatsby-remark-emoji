module.exports = async ({ markdownAST }, pluginOptions) => {
  const { default: emoji } = await import('remark-emoji');
  return emoji({
    emoticon: true,
    ...pluginOptions,
  })(markdownAST);
};
