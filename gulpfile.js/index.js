const gulp = require('gulp');
const config = require('../config');
const clean = require('./clean');
const html = require('./html');
const styles = require('./styles');
const scripts = require('./scripts');
const static = require('./static');
const serve = require('./serve');

function watch() {
  gulp.watch(config.path.src + '**/*.html', html);
  gulp.watch(config.path.src + '**/*.scss', styles);
  gulp.watch(config.path.src + '**/*.js', scripts);
}

exports.dev = gulp.series(clean, gulp.parallel(static, html, styles, scripts), serve);
exports.default = gulp.series(clean, gulp.parallel(static, html, styles, scripts), watch);
