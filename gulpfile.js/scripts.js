const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const lec = require('gulp-line-ending-corrector');
const plumber = require('gulp-plumber');
const strip = require('gulp-strip-comments');
const gulpif = require('gulp-if');
const config = require('../config');

function scripts() {
  return gulp.src(config.path.src + '**/*.js')
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel({
      presets: [
        ['env', {
          'targets': {
            'browsers': config.target_browsers
          }
        }]
      ],
      plugins: ['transform-remove-strict-mode']
    }))
    .pipe(lec({eolc: config.eolc, encoding: config.encoding}))
    .pipe(gulpif(config.delete_scripts_comment, strip({ignore: /\/\*\*\s*\n([^\*]*(\*[^\/])?)*\*\//g})))
    .pipe(gulp.dest(config.path.dist));
}

module.exports = scripts;
