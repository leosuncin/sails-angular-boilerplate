/**
 * Add, remove and rebuild AngularJS dependency injection annotations.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *    https://github.com/mzgol/grunt-ng-annotate
 */
module.exports = function(grunt) {

    grunt.config.set('ngAnnotate', {
        options: {
            singleQuotes: true
        },
        dist: {
            files: [{
                expand: true,
                cwd: 'assets/scripts',
                src: '**/*.js',
                dest: '.tmp/public/scripts'
            }]
        },
        vendor: {
            files: [{
                expand: true,
                cwd: 'assets/vendor',
                filter: 'isFile',
                src: '**/*.js',
                dest: '.tmp/public/vendor'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-ng-annotate');
};
