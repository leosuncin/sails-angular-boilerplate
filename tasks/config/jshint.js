/**
 * Validate files with JSHint
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-JSHint
 */

module.exports = function(grunt) {

    grunt.config.set('jshint', {
        options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish'),
            force: true
        },
        frontend: {
            src: ['assets/scripts/**/*.js']
        },
        backend: {
            src: ['api/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};
