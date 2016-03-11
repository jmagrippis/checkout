module.exports = {
  context: __dirname,
  entry: __dirname + "/src",
  output: {
    path: __dirname + "/dist",
    filename: "checkout.js"
  },
  module: {
    preLoaders: [
        {
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'eslint'
        }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      }
    ],
  }
}
