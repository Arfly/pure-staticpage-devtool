const gulp = require('gulp')
const babel = require('gulp-babel')
const minify = require('gulp-minify')
const path = require('path')
module.exports = function(){
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(minify())
        .pipe(gulp.dest(path.resolve(__dirname,'../build')))
}