

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.initConfig({
        cssmin: {
            target: {
                files: {
                    'static/css/vendor.css': ['static-source/css/vendor/*.css'],
                    'static/css/main.css': ['static-source/css/*.css']
                }
            }
        }
    })

    grunt.registerTask('default', ['cssmin']);
};