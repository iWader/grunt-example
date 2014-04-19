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
    }
  });

};