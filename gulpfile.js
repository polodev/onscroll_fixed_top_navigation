//var gulp = require('gulp') ;
//var less = require('gulp-less');
//var path = require('path');
//
//gulp.task('less', function () {
//	return gulp.src('assets/style.less')
//		.pipe(less({
//			paths : [path.join(__dirname, 'less', 'includes')]
//		}))
//		.pipe(gulp.dest('./assets/'));
//});

var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
	return gulp.src('assets/style.less')
			.pipe(less({
				paths : [path.join(__dirname, 'less', 'includes')]
				}))
			.pipe(gulp.dest('./assets/'))
	})
gulp.task('watch', function() {
	gulp.watch('assets/style.less', ['less'])
	})
gulp.task('default', ['less', 'watch'])