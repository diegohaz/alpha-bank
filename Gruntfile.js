'use strict';

module.exports = function(grunt) {

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  grunt.initConfig({

    requirejs: {
      js: {
        options: {
          uglify2: {
              mangle: false
          },
          baseUrl: "app/",
          mainConfigFile: "app/main.js",
          name: 'main',
          out: "app/modules/modules.combined.js",
          optimize: 'uglify2'
        }
      }
    }
  });
};