module.exports = (env, argv) => ({
  entry: './src/App.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  devtool: argv.mode === 'production' ? false : 'eval-cheap-module-source-map'
})