const gulp = require('gulp')
const jsTask = require('./gulpfile.tasks/js.task')
const htmlTask = require('./gulpfile.tasks/html.task')
const cssTask = require('./gulpfile.tasks/css.task')
const cleanTask = require('./gulpfile.tasks/clean.task')
const livereload = require('gulp-livereload')
const webserver = require('gulp-webserver')

gulp.task('default',jsTask)

gulp.task('watch', ()=>{
    livereload.listen()
    gulp.watch('./src/**/*.js',jsTask)
    // gulp.watch('./src/**/*.css',cssTask)
    gulp.watch('./src/html/**/*.html',htmlTask)
})

gulp.task('clean', cleanTask)

gulp.task('init', ()=>{
    htmlTask()
    jsTask()
})

gulp.task('dev', ['clean','init','webserver','watch'])

gulp.task('webserver', function() {
    gulp.src('./build/')
      .pipe(webserver({
        livereload: true,
        // directoryListing: true,
        open: true,
        port: 3000
      }));
  });