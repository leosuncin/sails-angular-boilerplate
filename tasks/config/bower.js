/**
 * Install bower components.
 *
 * ---------------------------------------------------------------
 *
 * Installs bower components and copies the required files into the assets folder structure.
 *
 */

module.exports = function(grunt) {

    grunt.config.set('bower', {
        dev: {
            dest: 'assets/vendor',
            options: {
                expand: true,
                keepExpandedHierarchy: true,
                packageSpecific: {}
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower');
};
