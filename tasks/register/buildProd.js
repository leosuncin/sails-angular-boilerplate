module.exports = function (grunt) {

    grunt.registerTask('buildProd', [
        'compileAssetsProd',
        'linkAssetsBuildProd',
        'clean:build',
        'sync:build'
    ]);

};
