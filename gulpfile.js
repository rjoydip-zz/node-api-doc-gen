const gulp = require('gulp')

gulp.task('copy', function () {
    return gulp.src('./doc/**/*')
        .pipe(gulp.dest('./public/doc'));
});