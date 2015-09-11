/**
 * Minify SVG
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *    https://github.com/sindresorhus/grunt-svgmin
 */

module.exports = function(grunt) {

    grunt.config.set('svgmin', {
        dist: {
            options: {
                plugins: [
                    {removeViewBox: false},
                    {removeUselessStrokeAndFill: false}
                ]
            },
            files: [{
                expand: true,
                flatten: true,
                filter: 'isFile',
                cwd: 'assets',
                src: ['images/**/*.svg'], // Actual patterns to match
                dest: '.tmp/public/images'
            }, {
                expand: true,
                cwd: 'assets',
                src: ['*.svg'], // Actual patterns to match
                dest: '.tmp/public'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-svgmin');
};
