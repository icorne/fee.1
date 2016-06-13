const gulp = require('gulp');
const ts = require('gulp-typescript');

gulp.task('default', () => {
    gulp.src('./src/*.ts')
        .pipe(ts())
        .pipe(gulp.dest('./dist'));
});