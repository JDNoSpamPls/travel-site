var 
	gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('watch', function() {

	browserSync.init({
		// notify: false, // removes the notification at top-right corner of browser
		server: {
			baseDir: "./"
		}
	});

	watch('./resources/index.html', function() {
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});

});

gulp.task('cssInject', ['styles'], function() {

	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());

});

gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});








// 