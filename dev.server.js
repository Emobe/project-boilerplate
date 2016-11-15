const path = require('path');
const webpack = require('webpack');
const express = require('express');
const config = require('./dev.webpack');

const app = express();
const compiler = webpack(config);
const port = process.env.port || 8000;

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log(`Listening at http://localhost:${port}/`);
})
