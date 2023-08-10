module.exports = {
  singleQuote: true,
  tabWidth: 2,
  printWidth: 100,
  bracketSameLine: true,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
