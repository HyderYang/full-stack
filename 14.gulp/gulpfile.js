const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

gulp.task('js', () => {
 return gulp
   // .src(['./src/**/*/js']) // ** 指代任意目录 任意层级
   .src(['./src/js/*.js'])

   // 不认 es6 需要前置babel
   // .pipe(concat('bundle.min.js'))  // 组合文件
   .pipe(uglify({}))              // 压缩
   .pipe(rename({
    suffix: '.min'                   // 重命名 后缀
   }))
   .pipe(gulp.dest('./build/js/'));
});

gulp.task('default', ['js']);
