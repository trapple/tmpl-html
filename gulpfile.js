var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

gulp.task('browserSync', function() {
  browserSync({
    open: true,
    port: 3000,
    startPath: "/",
    server: {
      baseDir: "./public/"
    }
  });
});

gulp.task('default', ['browserSync'], function() {
  gulp.watch(['public/**/*'], function () {
    runSequence(browserSync.reload);
  });
});
