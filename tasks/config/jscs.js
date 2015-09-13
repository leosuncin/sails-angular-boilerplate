/**
 * Task for checking JavaScript Code Style with jscs.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *    https://github.com/jscs-dev/grunt-jscs
 */

module.exports = function(grunt) {

    grunt.config.set('jscs', {
        options: {
            config: '.jscsrc',
            reporter: 'console',
            verbose: true // If you need output with rule names http://jscs.info/overview.html#verbose
        },
        frontend: {
            src: ['assets/scripts/**/*.js']
        },
        backend: {
            src: ['api/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-jscs');
};
