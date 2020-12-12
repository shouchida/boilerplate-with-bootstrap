const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const csscomb = require('gulp-csscomb');
const cssDeclarationSorter = require('css-declaration-sorter');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const lec = require('gulp-line-ending-corrector');
const config = require('../config');

function styles() {
  const plugins = [
    cssDeclarationSorter({
      order: 'smacss'
    }),
    autoprefixer({
      grid: 'autoplace'
    })
  ];

  return gulp.src(config.path.src + '**/*.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(csscomb())
    .pipe(postcss(plugins))
    .pipe(lec({eolc: config.eolc, encoding: config.encoding}))
    .pipe(gulp.dest(config.path.dist));
}

module.exports = styles;
