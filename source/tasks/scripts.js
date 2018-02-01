var uglify = function (gulp, options, plugins) {


    gulp.task('concat:lib', function () {
        return gulp.src(options.config.libscripts)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.concat(options.pkg.name + '.lib.js')).on('error', plugins.notify.onError('Error: <%= error.message %>'))
            .pipe(plugins.sourcemaps.write('./'))
            .pipe(plugins.notify({message: 'Lib Script files merged', onLast: true}))
            .pipe(gulp.dest(options.config.paths.scripts));
    });

    gulp.task('concat', function () {
        return gulp.src(options.config.scripts)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.concat(options.pkg.name + '.js')).on('error', plugins.notify.onError('Error: <%= error.message %>'))
            .pipe(plugins.sourcemaps.write('./'))
            .pipe(plugins.notify({message: 'App Script files merged', onLast: true}))
            .pipe(gulp.dest(options.config.paths.scripts));
    });

    gulp.task('script', ['concat', 'concat:lib'], function () {
        return gulp.src(options.config.paths.scripts + options.pkg.name + '.js')
            .pipe(plugins.rename(options.pkg.name + '.min.js'))
            .pipe(plugins.uglify()).on('error', plugins.notify.onError('Error: <%= error.message %>'))
            .pipe(plugins.header(options.config.banner, {pkg: options.pkg, date: new Date()}))
            .pipe(plugins.notify({message: 'Lib Script files uglified', onLast: true}))
            .pipe(gulp.dest(options.config.paths.scripts));
    });

};

module.exports = uglify;