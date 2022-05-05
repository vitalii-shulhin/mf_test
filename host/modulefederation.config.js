const deps = require("./package.json").dependencies;

// export default () => ({
//   name: "host",
//   remotes: {
//     app1: "app1@http://localhost:3002/remoteEntry.js",
//     app2: "app2@http://localhost:3003/remoteEntry.js",
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
  name: "host",
  remotes: {
    app1: "app1@http://localhost:3002/remoteEntry.js",
    app2: "app2@http://localhost:3003/remoteEntry.js",
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
    }
  },
};
