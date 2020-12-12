const del = require('del');
const config = require('../config');

function clean() {
  return del(config.path.dist);
}

module.exports = clean;
