/* eslint strict: 0, no-console: 0 */
'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const webpack = require('webpack');
const config = require('./webpack.config.development');

const partsEndpoint = require('./endpoints/parts')
const models = require("./models")
const app = express();
const compiler = webpack(config);

const PORT = 3000;

app.use(bodyParser.json());

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));


var router = express.Router();

partsEndpoint.bindRoutes(router.route('/parts/'),router.route('/parts/:part_id'),{'search': router.route('/search')})

app.use('/api',router)

app.post('/create', function(req, res) {
  console.log(req.body)
  
});

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'hot-dev-app.html'));
});


models.sequelize.sync().then( () => {
  app.listen(PORT, 'localhost', err => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`Listening at http://localhost:${PORT}`);
  });
});
