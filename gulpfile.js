var gulp = require('gulp'),
	watch = require('gulp-watch'),
	compass = require('gulp-compass'),
	jshint = require('gulp-jshint'),
	plumber = require('gulp-plumber'),
	browserify = require('gulp-browserify'),
	changed = require('gulp-changed'),
	rename = require('gulp-rename'),
	imagemin = require('gulp-imagemin');

var paths = {
  scripts: 'js/**/*.js',
  styles: 'sass/**/*.scss',
  images: 'images/**/*',
  fonts: 'fonts/**/*.{ttf,woff,eof,svg,otf}'
};

gulp.task('compass', function() {
	return gulp.src(paths.styles)
		.pipe(compass())
		.pipe(gulp.dest('css'));
});

gulp.task('lint', function() {
	return gulp.src('js/cue-site.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('browserify', function() {
	return gulp.src('js/cue-site.js')
		.pipe(plumber())
		.pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(rename('cue-site.min.js'))
		.pipe(gulp.dest('js'));
});

gulp.task('imagemin', function() {
	return gulp.src(paths.images)
		.pipe(changed('images'))
	    .pipe(imagemin())
	    .pipe(gulp.dest('build/images'));
});

gulp.task('watch', function () {
    gulp.watch(paths.styles, ['compass']);
    gulp.watch(paths.scripts, ['lint', 'browserify']);
});

gulp.task('build', function() {
	gulp.src(paths.scripts)
		.pipe(gulp.dest('build/js'));

	gulp.src(paths.images)
		.pipe(changed('images'))
	    .pipe(imagemin())
	    .pipe(gulp.dest('build/images'));

	gulp.src(paths.fonts)
		.pipe(gulp.dest('build/fonts'));

	gulp.src(paths.styles)
		.pipe(compass())
		.pipe(gulp.dest('build/css'));
		
	gulp.src('index.html')
		.pipe(gulp.dest('build'));
});