const { src, dest } = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");


const style = () => {
   return src("./src/styles/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(dest("./dist/css"))
      .pipe(browserSync.stream());
};




exports.style = style;
