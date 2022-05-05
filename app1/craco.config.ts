const cracoModuleFederation = require('craco-module-federation');

export default () => ({
  mode: 'development',
  // Adding Server
  devServer: {
    port: 3002,
  },
  plugins: [
    {
      plugin: cracoModuleFederation
    },
  ],
});
