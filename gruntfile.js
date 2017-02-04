module.exports = function(grunt) {
   grunt.initConfig({
      less: {
         development: {
            options: {
               compress: true,
               yuicompress: true,
               optimization: 2
               
            },
            files: {
               // target.css file: source.less file
               "style/style.css": "style/style.less"
            }
        }        
   },
   watch: {
      styles: {
         files: ['style/style.less'], // which files to watch
         tasks: ['less'],
         options: {
            nospawn: true
         }
      }
   },
   autoprefixer: {
    options: {
        browsers: ['last 2 versions', 'ie 9']
    },
    your_target: {
        src: 'style/style.css',
        dest: 'style/style.css'
    }
}
});
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-autoprefixer');
grunt.registerTask('default', ['watch']);
};
