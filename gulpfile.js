const gulp = require('gulp');
const ts = require('gulp-typescript');
const browserSync = require ('browser-sync');
const sass = require('gulp-sass');

const distDestination = './dist/';

gulp.task('serve', ['sass', 'ts'], function(done) {
    browserSync({
        open: false,
        port: 9000,
        server: {
            baseDir: ['.'],
            middleware: function (req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
            }
        }
    }, done);
    gulp.watch('app/*.ts', ['ts']);
    gulp.watch('app/*.scss', ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("dist/*.js").on('change', browserSync.reload);
    gulp.watch("dist/*.css").on('change', browserSync.reload);
});

gulp.task('ts', function(){
    gulp.src(['app/**/*.ts', 'typings/**/*'])
        .pipe(ts({
            module: 'system',
            moduleResolution: "node",
            experimentalDecorators: true,
            emitDecoratorMetadata: true
        }))
        .pipe(gulp.dest(distDestination))
        .pipe(browserSync.stream());
});


gulp.task('sass', function () {
    return gulp.src('app/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(distDestination));
});


gulp.task('default', ['serve']);