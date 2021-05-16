const del = require('del');
const { src, dest, task } = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');


function clean(cb) {
  del.sync('dist');
}

function buildOption(cb) {
  return src("./src/styles/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(dest("./dist/css"));
}

function build(cb) {
  clean();
  buildOption();
  cb();
}

task(build);