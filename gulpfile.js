var gulp = require("gulp");
var sass = require("gulp-sass");

function SassCompile() {
  return gulp
    .src("./src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"));
}
exports.default = SassCompile;
