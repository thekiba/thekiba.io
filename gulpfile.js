var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var declare = require('gulp-declare');
var handlebars = require('gulp-handlebars');
var livereload = require('gulp-livereload');
var lr = require('tiny-lr');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var vendors = require('main-bower-files');
var server = lr();
var wrap = require('gulp-wrap');

/**
 * Define Gulp Task for Vendors JavaScripts
 */
// gulp.task('vendors', function () {
//   gulp.src( vendors() )
//     .pipe(concat('vendors.js'))
//     .pipe(gulp.dest('public/javascripts'))
//     .pipe(connect.reload());
// });

/**
 * Define Gulp Task for Helpers
 */
// gulp.task('helpers', function () {
//   gulp.src('assets/helpers/*.js')
//     .pipe(concat('helpers.js'))
//     .pipe(gulp.dest('public/javascripts'))
//     .pipe(connect.reload());
// });

/**
 * Define Gulp Task for Templates
 */
// gulp.task('templates', function () {
//   gulp.src('assets/templates/*.hbs')
//     .pipe(handlebars())
//     .pipe(wrap('Handlebars.template(<%= contents %>)'))
//     .pipe(declare({
//       namespace: 'Handlebars.Templates',
//       noRedeclare: true
//     }))
//     .pipe(concat('templates.js'))
//     .pipe(gulp.dest('public/javascripts/'))
//     .pipe(connect.reload());
// });

/**
 * Define Gulp Task for JavaScripts
 */
// gulp.task('javascripts', function () {
//   gulp.src('assets/javascripts/*.js')
//     .pipe(concat('application.js'))
//     .pipe(gulp.dest('public/javascripts'))
//     .pipe(connect.reload());
// });

/**
 * Define Gulp Task for StyleSheets
 */
// gulp.task('stylesheets', function () {
//   gulp.src('assets/stylesheets/*.css')
//     .pipe(concat('application.css'))
//     .pipe(gulp.dest('public/stylesheets'))
//     .pipe(connect.reload());
// });

/**
 * Define Gulp Task for Build assets
 */
// gulp.task('build', function () {
//   gulp.src(['public/javascripts/vendors.js',
//       'public/javascripts/helpers.js',
//       'public/javascripts/templates.js',
//       'public/javascripts/application.js'])
//     .pipe(concat('widget.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('build'));

//   gulp.src(['public/stylesheets/application.css'])
//     .pipe(concat('widget.min.css'))
//     .pipe(uglifycss())
//     .pipe(gulp.dest('build'));
// });

gulp.task('html', function () {
  gulp.src(['index.html'])
    .pipe(connect.reload());
});

gulp.task('img', function () {
  gulp.src(['img/*'])
    .pipe(connect.reload());
});


/**
 * Define Gulp Task for Server livereaload
 */
gulp.task('server', function () {
  connect.server({
    root: '',
    port: 9000,
    livereload: true
  });
});

/**
 * Define Gulp Task for Watch assets
 */
gulp.task('watch', function () {
  gulp.watch( 'index.html', ['html'] );
  // gulp.watch( 'assets/vendors/**/*.js', ['vendors'] );
  // gulp.watch( 'assets/helpers/**/*.js', ['helpers'] );
  // gulp.watch( 'assets/templates/**/*.hbs', ['templates'] );
  // gulp.watch( 'assets/javascripts/**/*.js', ['javascripts'] );
  // gulp.watch( 'assets/stylesheets/**/*.css', ['stylesheets'] );
});

/**
 * Define Gulp Task for Default
 */
// gulp.task( 'default', ['concat', 'build'] );

/**
 * Define Gulp Task for Concat
 */
// gulp.task( 'concat', ['vendors', 'helpers', 'templates', 'javascripts', 'stylesheets'] );

/**
 * Define Gulp Task for LiveReaload
 */
// gulp.task( 'live', ['default', 'server', 'watch'] );

gulp.task( 'default', ['live']);

gulp.task( 'live', ['server', 'watch'] );