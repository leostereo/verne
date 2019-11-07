const sassFiles = [
  '~@/assets/styles/theme.scss',
];

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: sassFiles.map(src => `@import "${src}";`).join('\n'),
      },
    },
  },
  chainWebpack: (config) => {
    ['vue-modules', 'normal-modules', 'normal'].forEach((match) => {
      config.module.rule('sass').oneOf(match).use('sass-loader')
        .tap(opt => ({ ...opt, data: null }));
    });
  },
};
