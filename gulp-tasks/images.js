const { src, dest } = require("gulp");

const images = () => {
   return src("./src/images/*.{png,jpg,jpeg,gif,svg}").pipe(
      dest("./dist/images")
   );
};

exports.images = images;
