const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    hot: false,
    liveReload: false,
  },
  // Normally when using GitHub Pages this would be set to '/<repo name>/' (as in
  // mckel5.github.io/<repo name>) HOWEVER, since I am using a custom domain,
  // I do indeed want everything to start at the root
  publicPath: '/',
  pwa: {
    // `name` property is sourced from package.json by default
    themeColor: '#000000',
  },
});
