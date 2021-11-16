const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));

gulp.task("sass", () => {
    return gulp.src("./src/scss/styles.scss")
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(gulp.dest("./dist/css/"));
});

gulp.task("watch", () => {
    gulp.watch("./src/scss/**/*.scss", (done) => gulp.series(["sass"])(done));
});