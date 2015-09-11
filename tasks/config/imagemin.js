/**
 * Minify images
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-imagemin
 */
var mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {

    grunt.config.set('imagemin', {
        dist: {
            options: {
                optimizationLevel: 4,
                progressive: true,
                interlaced: true,
                use: [mozjpeg()]
            },
            files: [{
                expand: true,
                flatten: true,
                filter: 'isFile',
                cwd: 'assets',
                src: ['images/**/*.{jpg,jpeg,png,gif,JPG,JPEG,PNG,GIF}'], // Actual patterns to match
                dest: '.tmp/public/images'
            }, {
                expand: true,
                cwd: 'assets',
                src: ['*.{jpg,jpeg,png,gif,ico,JPG,JPEG,PNG,GIF,ICO}'], // Actual patterns to match
                dest: '.tmp/public'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
};
