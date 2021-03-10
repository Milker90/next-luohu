const withLess = require("@zeit/next-less");
const withCss = require("@zeit/next-css");
// const lessToJS = require("less-vars-to-js");
// const fs = require("fs");
// const path = require("path");

// const themeVariables = lessToJS(
//   fs.readFileSync(path.resolve(__dirname, "./styles/antd-custom.less"), "utf8")
// );

// console.log("themeVariables===========");
// console.log(themeVariables);

module.exports = withLess(
  withCss({
    basePath: "/next-ssr",
    compress: true,
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: {
        "@primary-color": "#52c41a",
        "@brand-primary": "#52c41a",
      },
    },
    webpack(config, { isServer }) {
      if (isServer) {
        const antStyles = /antd-mobile\/.*?\/style.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === "function") {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === "function" ? [] : origExternals),
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: "null-loader",
        });
      }
      return config;
    },
  })
);
