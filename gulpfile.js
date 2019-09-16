const gulp = require('gulp')
const jsTask = require('./gulpfile.tasks/js.task')
const htmlTask = require('./gulpfile.tasks/html.task')
const cssTask = require('./gulpfile.tasks/css.task')
const cleanTask = require('./gulpfile.tasks/clean.task')
const livereload = require('gulp-livereload')
const webserver = require('gulp-webserver')
const browserSync = require('browser-sync');

// const connect = require('gulp-connect');

gulp.task('default', jsTask)

gulp.task('watch', () => {
  livereload.listen()
  gulp.watch('./src/**/*.js', jsTask)
  // gulp.watch('./src/**/*.css',cssTask)
  gulp.watch('./src/html/**/*.html', ()=>{
    console.log('111')
    htmlTask()
    livereload.reload()
  })
})

gulp.task('clean', cleanTask)

gulp.task('init', () => {
  htmlTask()
  jsTask()
})

gulp.task('dev', ['browser-sync', 'watch'])

gulp.task('webserver', function() {
  console.log(11)
  gulp.src('./build/')
    .pipe(webserver({
      livereload: true,
      // directoryListing: true,
      open: true,
      port: 3000
    }));
});

gulp.task('browser-sync', function () {
  browserSync.init({
      files:['**'],
      server:{
          baseDir:'./build',  // 设置服务器的根目录
          index:'' // 指定默认打开的文件
      },
      port:8050  // 指定访问服务器的端口号
  });
});

// gulp.task('connect', function () {
//   connect.server({
//     root: 'build',
//     livereload: true,
//     open: true
//   });
// });