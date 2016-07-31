/// <binding BeforeBuild='styles' />
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('styles', function() {
    return gulp.src(['app/**/*.less'], { base: '.' })
        .pipe(less())
        .pipe(gulp.dest(''));
});

