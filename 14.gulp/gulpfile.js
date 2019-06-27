const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const map = require('gulp-sourcemaps');

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
   .pipe(gulp.dest('./build/js/uglify'));
});


// es6压缩
gulp.task('es6', () => {
  return gulp
    .src(['./src/js/*.js'])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./build/js/es6'));
});


// maps
gulp.task('map', () => {
  return gulp
    .src(['./src/js/*.js'])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(map.init())                   // 初始化 sourcemap
    .pipe(uglify({}))              // 压缩
    .pipe(map.write())                  // 写出 map文件
    .pipe(rename({
      suffix: '.min'                    // 重命名 后缀
    }))
    .pipe(gulp.dest('./build/js/map'));
});



