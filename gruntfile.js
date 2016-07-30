/**
 * Created by NP on 7/23/2016.
 */
    module.exports = function (grunt) {

    //configure main project settings
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),

     //Name of plugin (plugin name without the "grunt-contrib-")
        cssmin: {
            dist: {
                files: {
                    'css/main.min.css': ['css/main.css']
                }
            }
        }
});

    // load the plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // do the task
    grunt.registerTask("default", ['cssmin'])
};