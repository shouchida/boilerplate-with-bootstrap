const gulp = require('gulp');
const ejs = require('gulp-ejs');
const lec = require('gulp-line-ending-corrector');
const config = require('../config');

function html() {
  return gulp.src([
    config.path.src + '**/*.html',
    '!' + config.path.src + '**/_*.html'
  ])
    .pipe(ejs({
    }, {}, {
      ext: '.html'
    }))
    .pipe(lec({eolc: config.eolc, encoding: config.encoding}))
    .pipe(gulp.dest(config.path.dist));
}

module.exports = html;
