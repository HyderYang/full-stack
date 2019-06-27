const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const map = require('gulp-sourcemaps');
const cssmin = require('gulp-cssmin');
const image = require('gulp-imagemin');
const livereload = require('gulp-livereload');


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


// 压缩css
gulp.task('css', () => {
  return gulp
    .src(['./src/css/**/*.css'])
    .pipe(concat('style.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./build/css/min'));
});


// 压缩image
gulp.task('image', () => {
  return gulp
    .src(['./src/img/**/*.jpg', './src/img/**/*.png', './src/img/**/*.gif'])
    .pipe(image([
      image.gifsicle({        // gif配置
        interlaced: true      // 隔行扫描 随加载进度越来越清晰
      }),
      image.jpegtran({
        proressive: true      // 渐进加载 同上
      }),
      image.optipng({
        optimizationLevel: 5  // 压缩级别 max=5
      })
    ]))
    .pipe(gulp.dest('./build/img'));
});


gulp.task('watch', () => {
  gulp.watch('./src/js/*.js', ['es6']);
});

const js_path = ['./src/js/**/*.js'];

gulp.task('reload', () => {
   return gulp
     .src(js_path)
     .pipe(babel({
       presets: ['@babel/env']
     }))
     .pipe(concat('bundle.min.js'))
     .pipe(gulp.dest('./build/reload/'))
     .pipe(livereload())
});

gulp.task('reload_watch', () => {
  livereload.listen();
  gulp.watch(js_path, ['reload']);
  gulp.watch([
    //html css文件路径
    ...js_path
  ], file => {
    livereload.changed(file.path);
  });
});
