const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    hot: false,
    liveReload: false,
  },
  // publicPath: process.env.NODE_ENV === 'production' ? '/theatri/' : '/',
  publicPath: '/',
});
