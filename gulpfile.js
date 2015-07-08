var
	gulp        = require('gulp'),
	less        = require('gulp-less'),
	rename      = require('gulp-rename'),
	concat      = require('gulp-concat'),
	replace     = require('gulp-replace'),
	browserify  = require('gulp-browserify'),
	es          = require('event-stream'),
	chance      = require('chance'),
	$           = require('gulp-load-plugins')(),
	fs          = require('fs'),
	path        = require('path'),
	ini         = require('ini'),
	runSequence = require('run-sequence')
;

var
	args       = process.argv.slice(2),
	dev        = args[1] == "--dev" ? true : false,
	env        = ini.parse(fs.readFileSync('./config/environment.ini', 'utf-8')),
	last_build = env.Application['app_build'],
	build      = Math.random().toString(36).substring(7)
;

gulp.task('cleanup', function() {
	return gulp.src(['bundles/**/*', 'tmp']).pipe($.clean());
});

gulp.task('push-update', function() {
	env.Application['app_build'] = build;

	fs.writeFileSync(path.join(__dirname, 'config', 'environment.ini'), ini.stringify(env))
});

gulp.task('less', function() {
	var _build = dev ? last_build : build;

	gulp.src('css/*.less')
		.pipe(less({
			paths: [path.join(__dirname, 'css', 'includes')]
		}))
		.pipe($.minifyCss({keepBreaks: false}))
		.pipe(rename({
			basename: 'style',
			suffix: '.' + _build
		}))
		.pipe(gulp.dest('bundles/'));
});

gulp.task('templates', function() {
	return gulp.src('js/templates/**/*.tpl')
		.pipe($.templateCompile({
			namespace: '_.templates'
		}))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest('tmp/'));
});

//-- DEVELOPMENT USAGE --//
gulp.task('only-ext', function() {
	return gulp.src([
			'js/ext/**/*.js'
		])
		.pipe(concat('bundle.' + build + '.js'))

		// Replace some vars for random strings (can cause parse errors)
		//.pipe(replace(/Namespace/g, c_nm))
		//.pipe(replace(/Class/g, c_class))
		//.pipe(replace(/Binder/g, c_binder))
		
		.pipe($.uglify({outSourceMap: false}))
		.pipe(gulp.dest('bundles/'))
});

gulp.task('only-ui', function() {
	/*
	 * TODO: Move the 'ext' folder compile process to another task (only-ext), save to tmp/ and then concat ext from tmp/ and the ui source
	 */
	return gulp.src([
			'tmp/**/*.js', 
			'js/inheritance.js', 
			'js/main.js',
			'js/*.js',
			'js/elements/*.js'
		])
		.pipe(concat('app.' + last_build + '.js'))
		.pipe($.uglify({outSourceMap: false}))
		.pipe(gulp.dest('bundles/'))
});

gulp.task('watch', function() {
  gulp.watch('css/**/*.less', ['less']);
  gulp.watch(['js/*.js', 'js/elements/**/*.js', 'js/templates/**/*.tpl'], ['only-ui']);
});
//-- DEVELOPMENT USAGE --//

gulp.task('scripts', function() {
	var Chance = new chance();
	var c_nm = Chance.word({length: 10});
	var c_class = Chance.word({length: 10});
	var c_binder = Chance.word({length: 10});

	return es.concat(
		gulp.src([
				'js/ext/**/*.js'
			])
			.pipe(concat('bundle.' + build + '.js'))

			// Replace some vars for random strings (can cause parse errors)
			//.pipe(replace(/Namespace/g, c_nm))
			//.pipe(replace(/Class/g, c_class))
			//.pipe(replace(/Binder/g, c_binder))
			
			.pipe($.uglify({outSourceMap: false}))
			.pipe(gulp.dest('bundles/')),
		gulp.src([
				'tmp/**/*.js', 
				'js/inheritance.js', 
				'js/main.js',
				'js/*.js',
				'js/elements/*.js'
			])
			.pipe(concat('app.' + build + '.js'))

			// Replace some vars for random strings (can cause parse errors)
			//.pipe(replace(/Namespace/g, c_nm))
			//.pipe(replace(/Class/g, c_class))
			//.pipe(replace(/Binder/g, c_binder))
			
			.pipe($.uglify({outSourceMap: false}))
			.pipe(gulp.dest('bundles/'))
	);
});

gulp.task('build', function(callback) {
	runSequence(
		'cleanup',
		'less',
		'templates',
		'scripts',
		'push-update',
		callback
	);
});

gulp.task('default', function() {
	gulp.start('build');
});
