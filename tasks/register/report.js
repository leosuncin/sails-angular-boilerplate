module.exports = function (grunt) {

    grunt.registerTask('report', [
        'jshint',
        'jscs',
        'plato',
        'notify:report'
    ]);

};
