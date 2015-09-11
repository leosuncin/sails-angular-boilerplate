/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

    grunt.config.set('watch', {
        less: {
            files: ['assets/styles/{,**/}*.less'],
            tasks: ['less:dev', 'sails-linker:devStyles', 'notify:less'],
            options: {
                livereload: true
            }
        },
        css: {
            files: ['assets/styles/{,**/}*.css'],
            tasks: ['copy:styles', 'sails-linker:devStyles', 'notify:css'],
            options: {
                livereload: true
            }
        },
        coffee: {
            files: ['assets/scripts/**/*.coffee'],
            tasks: ['coffee:dev', 'sails-linker:devJs', 'notify:coffee'],
            options: {
                livereload: true
            }
        },
        scripts: {
            files: ['assets/scripts/**/*.js', 'assets/js/**/*.js'],
            tasks: ['copy:scripts', 'sails-linker:devJs', 'notify:scripts'],
            options: {
                livereload: true
            }
        },
        images: {
            files: ['assets/{,images/**/}*.{jpg,jpeg,png,gif,ico,svg}'],
            tasks: ['copy:images', 'notify:images'],
            options: {
                livereload: true
            }
        },
        bower: {
            files: ['assets/vendor/**/*'],
            tasks: [
              'copy:vendor',
              'sails-linker:devStyles',
              'sails-linker:devJs',
              'notify:bower'
            ],
            options: {
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
