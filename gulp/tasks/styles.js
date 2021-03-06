// import or require gulp library codes and plugins
var 
	gulp = require('gulp'),
	postcss = require('gulp-postcss')
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	mixins = require('postcss-mixins')
	hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {

	return 	gulp.src('./app/assets/styles/styles.css')
			
			// set PostCSS filters
			.pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
			
			// error handling
			.on('error', function(errorInfo) {
				console.log(errorInfo);
				this.emit('end');
			})
			
			// set destination folder
			.pipe(gulp.dest('./app/temp/styles'));

});