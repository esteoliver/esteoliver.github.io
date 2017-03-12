'use strict';

// Section 0: Define
var gulp = require('gulp');

//// LiveReload
var browserSync = require('browser-sync').create();

//// Sass
var sass = require('gulp-sass');

// Section 1: Watch Tasks
//// Section 1.0: Browser Sync - Server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    }
  });
});

//// Section 1.1: Sass Task
gulp.task('sass', function(){
  return gulp.src('assets/scss/main.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('assets/styles'));
});


//// Section 1.3: Watch HTML, JS & Sass
gulp.task('serve', ['browserSync', 'sass'], function (){
  gulp.watch('assets/scss/**/*.scss', ['sass']);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('assets/scripts/**/*.js', [browserSync.reload]);
  gulp.watch('assets/styles/**/*.css', browserSync.reload);
});
