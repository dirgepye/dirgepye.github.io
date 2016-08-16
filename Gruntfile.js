module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    compass: true,
                    style: 'expanded'
                },
                files: {
                    'css/style.css': 'scss/style.scss'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    compass: true,
                    style: 'expanded'
                },
                files: {
                    'css/style2.css': "scss/style2.scss"
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'css/style.min.css': 'css/style.css'
                }
            }
        },

        watch: {
            sass: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            },
            styles: {
                files: ['css/style.css'],
                tasks: ['cssmin']
            }
        }
    });
    // load plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //defaluts
    grunt.registerTask('default', ['watch', 'sass', 'cssmin', 'compass']);
};