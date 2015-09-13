/**
 * Task to generate static analysis reports via plato
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *    https://github.com/jscs-dev/grunt-jscs
 */

module.exports = function(grunt) {
    var jshintrc = grunt.file.readJSON('.jshintrc');

    grunt.config.set('plato', {
        options: {
            jshint: jshintrc
        },
        report: {
            files: {
                '.tmp/reports': ['assets/scripts/**/*.js', 'api/**/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-plato');
};
