var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browserSync', function() {
  browserSync({
    open: false,
    port: 3000,
    startPath: "/",
    server: {
      baseDir: "./public/"
    }
  });
});

gulp.task('default', ['browserSync'], function() {
  gulp.watch(['public/**/*'], browserSync.reload);
});
