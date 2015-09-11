/**
 * Generates HTML5 Cache Manifest files
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *    https://github.com/gunta/grunt-manifest
 */

module.exports = function(grunt) {
    grunt.config.set('manifest', {
        generate: {
            options: {
                basePath: '.tmp/public/',
                preferOnline: false,
                timestamp: true,
                verbose: false,
                network: ['*'],
                fallback: []
            },
            src: [
                'min/*',
                '{,vendor/{,**/}*.tpl.html',
                '{,images/**/}*.{jpg,jpeg,png,gif,ico,svg,JPG,JPEG,PNG,GIF,ICO,SVG}',
                'fonts/**/*.{eot,svg,ttf,woff,woff2}'
            ],
            dest: '.tmp/public/manifest.appcache'
        }
    });

    grunt.loadNpmTasks('grunt-manifest');
};
