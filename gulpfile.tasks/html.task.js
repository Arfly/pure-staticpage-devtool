const gulp = require('gulp')
const path = require('path')
const fileinclude = require('gulp-file-include');
const livereload = require('gulp-livereload');
// const connect = require('gulp-connect');

module.exports = function () {
    console.log('html change')
    return gulp.src(path.resolve(__dirname, '../src/html/**/*.html'))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(path.resolve(__dirname, '../build'))
    );
}
