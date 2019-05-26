
module.exports = function(grunt) {

  grunt.initConfig({
    
    postcss: {

      options: {
        processors: [
          require('postcss-alias')(),
          require('postcss-crip')(),
          require('postcss-font-magician')(),
          require('postcss-triangle')(),
          require('postcss-all-link-colors')(),
          require('postcss-center')(),
          require('postcss-clearfix')(),
          require('postcss-size')(),
          require('postcss-color-short')(),
          require('postcss-colorfallback')(),
            require('postcss-simple-vars')(),
            require('autoprefixer')(),
          require('postcss-myplugin')()
        ]
      },
      dist: {
        src: 'src/styles.css',
        dest: 'dest/styles.css'
      }

    }
 
  });

    grunt.loadNpmTasks('grunt-postcss');
    
};
