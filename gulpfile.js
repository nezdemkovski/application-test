var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', [ 'build', 'watch' ]);
gulp.task('build', [ 'sass' ]);

gulp.task('watch', function() {
  gulp.watch('./src/**/*.scss', [ 'sass' ]);
});

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(function (file) {
        return file.base;
      }
    ));
});
