/**
 * Automatic desktop notifications for Grunt errors and warnings using Growl for OS X or Windows,
 * Mountain Lion and Mavericks Notification Center, and Notify-Send.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *    https://github.com/dylang/grunt-notify
 */

module.exports = function(grunt) {

    grunt.config.set('notify_hooks', {
        options: {
            enabled: true,
            'max_jshint_notifications': 5, // maximum number of notifications from jshint output
            success: false, // whether successful grunt executions should be notified automatically
            duration: 5 // the duration of notification in seconds, for `notify-send only
        }
    });

    grunt.config.set('notify', {
        server: {
            options: {
                title: 'Server lifted',
                message: 'Sails is running on http://localhost:1337/'
            }
        },
        less: {
            options: {
                title: 'LESS files compiled',
                message: 'LESS task finished running'
            }
        },
        css: {
            options: {
                title: 'CSS files copied',
                message: 'CSS task finished running'
            }
        },
        coffee: {
            options: {
                title: 'CoffeeScript files compiled',
                message: 'CoffeeScript task finished running'
            }
        },
        coffee: {
            options: {
                title: 'CoffeeScript files compiled',
                message: 'CoffeeScript task finished running'
            }
        },
        scripts: {
            options: {
                title: 'Javascript files copied',
                message: 'Javascript task finished running'
            }
        },
        images: {
            options: {
                title: 'Images files copied',
                message: 'Images task finished running'
            }
        },
        bower: {
            options: {
                title: 'Bower dependencies installed',
                message: 'Bower task finished running'
            }
        },
        report: {
            options: {
                title: 'Report created',
                message: 'Open .tmp/reports/index.html to see it'
            }
        },
    });

    grunt.loadNpmTasks('grunt-notify');
};
