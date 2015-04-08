var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
/*var babel = require('gulp-babel');

//Babel transpile
//cmd: gulp babel
gulp.task('babel', function () {
    return gulp.src('src/chartium-es6.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});
*/
//Jasmine tests
//cmd: grunt test
gulp.task('test', function () {
    return gulp.src('spec/test.js')
        .pipe(jasmine());
});