const gulp = require('gulp')
const path = require('path')
const fileinclude = require('gulp-file-include');

module.exports = function () {
    return gulp.src(path.resolve(__dirname, '../src/html/**/*.html'))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(path.resolve(__dirname, '../build')));

}

