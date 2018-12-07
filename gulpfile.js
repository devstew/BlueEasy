var gulp = require('gulp');
var sass = require('gulp-sass');
var tinypng = require('gulp-tinypng-compress');

gulp.task('test', function () {
    console.log('Hello world');
})

gulp.task('css', function () {
    return gulp.src('scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('style'));
});

gulp.task('sass-watch', function() {
    gulp.watch ('scss/**/*.scss', ['css'])
});

gulp.task('tinypng', function () {
    gulp.src('images/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'fYcLtMvyP2zWgKZylsf6QHDP7NwpQ6vw',
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('images'));
});