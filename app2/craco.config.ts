const cracoModuleFederation = require('craco-module-federation');

export default () => ({
  mode: 'development',
  // Adding Server
  devServer: {
    port: 3003,
  },
  plugins: [
    {
      plugin: cracoModuleFederation
    },
  ],
  // webpack: {
  //   plugins: {
  //     remove: ["ModuleScopePlugin"],
  //   },
  // },
});
