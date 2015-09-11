module.exports = function (grunt) {
    var env = process.env.NODE_ENV || 'development';

    grunt.registerTask('compileAssets', [
        'clean:dev',
        'jst:dev',
        'less:dev',
        'compass:dev',
        'coffee:dev',
        'bower:dev',
        'html2js:' + env,
        'copy'
    ]);

};
