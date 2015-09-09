module.exports = function(grunt) {

    grunt.registerTask('compileAssetsProd', [
        'compileAssets',
        'concat',
        'uglify',
        'cssmin'
    ]);

};
