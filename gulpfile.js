var gulp = require('gulp'),
	webserver = require('gulp-webserver');

gulp.task('webserver', function() {
	gulp.src('app')
	.pipe(webserver({
		livereload: true,
		open: true
	}));
});

gulp.task('default', ['webserver']);