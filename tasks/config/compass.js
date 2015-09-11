/**
 * Compiles SASS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/importer.scss` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-compass
 */
module.exports = function(grunt) {

    grunt.config.set('compass', {
        dev: {
            options: {
                httpPath: '/',
                cssDir: '.tmp/public/styles',
                sassDir: 'assets/styles',
                imagesDir: 'assets/images',
                javascriptsDir: 'assets/scripts',
                fontsDir: 'assets/fonts',
                outputStyle: 'compact',
                sourcemap: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
};
