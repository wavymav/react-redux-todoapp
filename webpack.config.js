module.exports = {
  devtool: 'eval-source-map',
  entry: "./src/app/index.js",
  output: {
    path: './public',
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './public',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
