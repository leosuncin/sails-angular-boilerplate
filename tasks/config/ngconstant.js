/**
 * Plugin for dynamic generation of angular constant modules.
 *
 * ---------------------------------------------------------------
 * This creates an Angular Module that can be injected via ENV
 * Add any desired constants to the ENV objects below.
 *
 * For usage docs see:
 *    https://github.com/werk85/grunt-ng-constant
 */

var constants = {
    ENV: {
        enviroment: process.env.NODE_ENV || 'development'
    }
};

module.exports = function(grunt) {

    grunt.config.set('ngconstant', {
        options: {
            wrap: '\'use strict\';\n\n {%= __ngModule %}',
            name: require('../../bower.json').moduleName + '.config',
            dest: 'assets/js/dependencies/constants.js'
        },
        development: {
            constants: constants
        },
        production: {
            constants: constants
        }
    });

    grunt.loadNpmTasks('grunt-ng-constant');
};
