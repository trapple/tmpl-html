var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
  browserify()
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/static/js/'));
});

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
