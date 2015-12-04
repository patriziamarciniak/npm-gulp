

var gulp = require('gulp');
var concat = require('gulp-concat');

    gulp.task('concat', function(){
        return gulp.src(['1.txt', '2.txt'])
            .pipe(concat('result.js'))
            .pipe(gulp.dest('./build'));

    });