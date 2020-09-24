module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  devServer: {
    contentBase: `${__dirname}/build`,
  },
  output: {
    path: `${__dirname}/build`,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },
      },
    ],
  },
};
