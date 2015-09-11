/**
 * Compiles AngularJS templates to JavaScript
 *
 * ---------------------------------------------------------------
 *
 * Angular-JS normally loads templates lazily from the server as you reference
 * them in your application (via ng-include, routing configuration or other
 * mechanism). Angular caches the source code for each template so that
 * subsequent references do not require another server request. However,
 * if your application is divided into many small components, then the initial
 * loading process may involve an unacceptably large number of additional
 * server requests.
 *
 * This plugin converts a group of templates to JavaScript and assembles them
 * into an Angular module that primes the cache directly when the module is
 * loaded. You can concatenate this module with your main application code so
 * that Angular does not need to make any additional server requests to
 * initialize the application.
 *
 * For usage docs see:
 *    https://github.com/karlgoldstein/grunt-html2js
 *
 */

module.exports = function(grunt) {
    grunt.config.set('html2js', {
        development: {
            options: {
                base: 'assets',
                quoteChar: '\'',
                module: require('../../bower.json').moduleName + '.templates',
                useStrict: true,
                singleModule: true,
                watch: true
            },
            src: require('../pipeline').templateFilesToInject,
            dest: 'assets/js/dependencies/templates.js'
        },
        production: {
            options: {
                base: 'assets',
                quoteChar: '\'',
                module: require('../../bower.json').moduleName + '.templates',
                useStrict: true,
                singleModule: true,
                htmlmin: { // Target options
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true,
                    removeComments: true,
                    preserveLineBreaks: true
                }
            },
            src: require('../pipeline').templateFilesToInject,
            dest: 'assets/js/dependencies/templates.js'
        }
    });

    grunt.loadNpmTasks('grunt-html2js');
};
