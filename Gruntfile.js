'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      dist: {
        files: {
          'public/assets/css/app.min.css': [
            'public/assets/less/app.less'
          ],
          'public/assets/css/vendor/bootstrap.min.css': [
            'public/assets/less/vendor/bootstrap/bootstrap.less'
          ]
        },
        options: {
          compress: true
        }
      }
    },
    watch: {
      less: {
        files: [
          'public/assets/less/*.less',
          'public/assets/less/vendor/bootstrap/*.less'
        ],
        tasks: ['less']
      }
    }
  });
  
  // Load the grunt plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks Grunt should run
  grunt.registerTask('default', ['less']);
  
  // Tasks Grunt should run under the dev command
  grunt.registerTask('dev', [
    'watch'
  ]);

};