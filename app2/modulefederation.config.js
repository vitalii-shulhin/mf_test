const deps = require("./package.json").dependencies;

// export default () => ({
//   name: "app2",
//   exposes: {
//     "./CounterAppTwo": "./src/components/CounterAppTwo",
//   },
//   filename: "remoteEntry.js",
//   shared: {
//     ...deps,
//     react: {
//       singleton: true,
//       requiredVersion: deps["react"],
//     },
//     "react-dom": {
//       singleton: true,
//       requiredVersion: deps["react-dom"],
//     },
//   },
// });

module.exports = {
  name: "app2",
  exposes: {
    "./CounterAppTwo": "./src/components/CounterAppTwo",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
    // "react-router-dom": {
    //   singleton: true,
    //   // eager: true,
    //   requiredVersion: deps["react-router-dom"],
    // },
  },
};
