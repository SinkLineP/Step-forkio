const { src, dest } = require("gulp");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync");

const scripts = () => {
   return src("./src/scripts/*.js")
      .pipe(uglify())
      .pipe(dest("./dist/js"))
      .pipe(browserSync.stream());
};

exports.scripts = scripts;
