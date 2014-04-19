'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      dist: {
        files: {
          'public/assets/css/app.min.css': [
            'public/assets/less/app.less'
          ]
        },
        options: {
          compress: true
        }
      }
    }
  });

};