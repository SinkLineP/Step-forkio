const { series, parallel } = require("gulp");
const { style } = require("./gulp-tasks/style.js");
const { serv } = require("./gulp-tasks/serv.js");
const { scripts } = require("./gulp-tasks/script.js");
const { images } = require("./gulp-tasks/images.js");
const { watch } = require("./gulp-tasks/watch");

exports.default = parallel(serv, watch, series(style, scripts, images));
