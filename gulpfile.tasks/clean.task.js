const gulp = require('gulp')
const clean = require('gulp-clean')
const path = require('path')

module.exports = function () {
    return gulp.src(path.resolve(__dirname,'../build'))
            .pipe(clean())
}