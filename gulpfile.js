var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');

gulp.task('bundle', function () {

    return browserify({
        basedir: __dirname,
        debug: true,
        entries: './src/client.js',
        cache: {},
        packageCache: {},
        fullPaths: false,
        transform: ['reactify']
    })
        .bundle()
        .on('error', function(err){
            gutil.log(gutil.colors.red(err));
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public'));

});

gulp.task('default', ['bundle']);