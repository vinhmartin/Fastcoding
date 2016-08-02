module.exports = function(grunt) {

  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
      
      sass: {
          mysass: {
            files: {
              'build/css/sass.css': ['sass/sass.scss']
            }
          }
        },

      cssmin: {
        mycss: {
          files: {
            'build/css/common.min.css': ['css/common.css']
          }
        }
      },

      uglify: {
        myjs: {
          files: {
            'build/js/scripts.min.js': ['js/scripts.js']
          }
        }
      },

      concat: {
        js: {
          src: ['js/scripts.js', 'js/script2.js'],
          dest: 'build/js/common.js',
        }
      },
    
      watch: {
        js: {
          files: ['js/*.js'],
          tasks: ['concat'],
        },
        sass: {
          files: ['sass/*.scss'],
          tasks: ['sass'],
        },
      },
      
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //grunt.registerTask('test', ['cssmin','uglify']);

};