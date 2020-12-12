const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const connectSSI = require('connect-ssi');
const config = require('../config');
const html = require('./html');
const styles = require('./styles');
const scripts = require('./scripts');

function serve(done) {
  browserSync.init({
    open: false,
    startPath: '',
    reloadDelay: 1000,
    once: true,
    notify: false,
    ghostMode: false,
    server: {
      baseDir: config.path.dist,
      middleware: connectSSI({
        baseDir: config.path.dist,
        ext: '.html'
      })
    }
  });

  const reload = function(done) {
    browserSync.reload();
    done();
  };

  gulp.watch(config.path.src + '**/*.html', gulp.series(html, reload));
  gulp.watch(config.path.src + '**/*.scss', gulp.series(styles, reload));
  gulp.watch(config.path.src + '**/*.js', gulp.series(scripts, reload));
  done();
}

module.exports = serve;
