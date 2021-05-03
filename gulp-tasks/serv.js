const browserSync = require("browser-sync").create();

const serv = (cb) => {
   browserSync.init({
      server: {
         baseDir: "./",
      },
      browser: "firefox",
   });
   cb();
};

exports.serv = serv;
exports.browsersync = browserSync;
