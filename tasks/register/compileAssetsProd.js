module.exports = function(grunt) {

    grunt.registerTask('compileAssetsProd', [
        'compileAssets',
        'ngAnnotate',
        'concat',
        'uglify',
        'cssmin',
        'imagemin',
        'svgmin',
        'manifest'
    ]);

};
