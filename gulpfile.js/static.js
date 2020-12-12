const gulp = require('gulp');
const config = require('../config');

function static() {
  return gulp.src(config.path.static + '**/*')
    .pipe(gulp.dest(config.path.dist));
}

module.exports = static;
