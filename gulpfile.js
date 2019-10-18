const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");

const cssDist = "./dist/css/";

gulp.task("sass", function(cb) {
  gulp
    .src("./scss/*.scss")
    .pipe(
      sass({
        errorLogToConsole: true,
        outputStyle: "compressed"
      })
    )
    .on("error", console.error.bind(console))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(cssDist));

  cb();
});

gulp.task(
  "default",
  gulp.series("sass", function(cb) {
    gulp.watch("./scss/*.scss", gulp.series("sass"));
    
    cb();
  })
);
