var render = function(gulp, options, plugins) {
    var opts = {
        path:       [options.config.paths.templates],
        envOptions: {
            autoescape:  false,
            lstripBlock: true

        }
    };

    gulp.task('templates', function() {

        return gulp.src(options.config.paths.templates + '**/*.html')
            //.pipe(plugins.nunjucksRender(opts))
            .pipe(plugins.notify({message: 'Template files rendered', onLast: true}))
            .pipe(gulp.dest(options.config.paths.tpl));
    });
};

module.exports = render;