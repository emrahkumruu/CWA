/**
 * @author Emrah Kumru
 */

'use strict';

var gulp         = require('gulp'),
    extend       = require('util')._extend,
    pkg          = require('./package.json'),
    options      = {pattern: ['./source/tasks/**/*.js']};

var config       = {};


config.paths = {
        app:            'app/',
        scripts:        'app/assets/scripts/',
        styles:         'app/assets/styles/',
        tpl:            'app/templates/',
        js:             'source/scripts/',
        scss:           'source/styles/',
        templates:      'source/templates/'
    };

config.banner = [
        '/*! <%= pkg.name %> \n' +
        ' *  <%= pkg.description %> \n' +
        ' *  @author <%= pkg.author %> \n' +
        '<% if (typeof pkg.contributors !== "undefined") { %>' +
        '<% pkg.contributors.forEach(function(contributor) { %>' +
        ' *          <%= contributor.name %> <<%=contributor.email %>> (<%=contributor.url %>)\n' +
        '<% }) %>' +
        '<% } %>' +
        ' *  @version <%= pkg.version %> \n' +
        ' *  @build <%= date %> \n' +
        ' */\n'
    ].join('');

config.scripts = [
        config.paths.js + '**/*.js'
    ];

config.libscripts = [
        'node_modules/angular/angular.js',
        'node_modules/angular-route/angular-route.js'
    ];

options = extend(options, {pkg: pkg, config: config});


require('load-gulp-tasks')(gulp, options);

gulp.task('default', ['connect', 'watch']);