const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const plugins = [
  new webpack.ProvidePlugin({
    process: "process/browser",
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "src", "index.html"),
  }),
];

function handlePlugins(enviroment) {
  // Set the current environment
  plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(enviroment),
      },
    })
  );

  return plugins;
}

module.exports = (env) => {
  console.log("env: ", env);

  return {
    mode: "none",
    entry: {
      app: path.join(__dirname, "src", "index.tsx"),
    },
    target: "web",
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        app: path.resolve(__dirname, "src/app"),
        components: path.resolve(__dirname, "src/components"),
        store: path.resolve(__dirname, "src/store"),
      },
    },
    context: path.join(__dirname, "src"),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: "/node_modules/",
        },
        {
          test: /\.s[ac]ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
          exclude: "/node_modules/",
        },
      ],
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "build"),
    },
    devServer: {
      hot: true,
      port: 1234,
    },
    plugins: handlePlugins(env.NODE_ENV),
  };
};
