import routes from "./src/routes";

const deps = require("./package.json").dependencies;

// export default () => ({
//   name: "app1",
//   exposes: {
//     "./CounterAppOne": "./src/components/CounterAppOne",
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
  name: "app1",
  exposes: {
    "./CounterAppOne": "./src/components/CounterAppOne",
    // "./DetailView1": "./src/components/DetailView1",
    // "./DetailView2": "./src/components/DetailView2",
    "./routes": "./src/routes",
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
    //   eager: true,
    //   requiredVersion: deps["react-router-dom"],
    // },
  },
};
