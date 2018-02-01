var watch = function (gulp, options, plugins) {
    gulp.task('watch', function () {

        gulp.watch(options.config.paths.templates + '**/*.html', ['templates']);
        gulp.watch(options.config.paths.app + '**/*.html', ['templates']);

        gulp.watch(options.config.paths.scss + '**/*.scss', ['styles']);

        gulp.watch([options.config.paths.js + '**/*.js'], ['script']);

    });
};

module.exports = watch;