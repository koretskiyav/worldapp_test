const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const { PORT, HOST } = require('./config').development;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
}).listen(PORT, HOST, function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Webpack Dev Server listening at http://%s:%s', HOST, PORT);
});
