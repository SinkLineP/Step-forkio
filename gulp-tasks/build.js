const del = require('del');
const { src, dest, task } = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');


function clean(cb) {
  del.sync('dist');
}

function image(cb) {
  return src('./src/images/*/*')
  .pipe(imagemin())
  .pipe(dest('./dist/images'))
}

function buildOption(cb) {
  return src("./src/styles/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(dest("./dist/css"))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(dest('dist/mini'));
    
}

function build(cb) {
  clean();
  buildOption();
  image();
  cb();
}

task(build);


    


