module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            default: {
                src: [
                    'dist',
                    'docs',
                    'build'
                ]
            }
        },
        copy : {
            bower: {
                src: [
                    'bower_components/cornerstone/dist/cornerstone.min.css',
                    'bower_components/cornerstone/dist/cornerstone.min.js',
                    'bower_components/dicomParser/dist/dicomParser.min.js',
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/jquery/dist/jquery.min.map',
                    'bower_components/cornerstoneWADOImageLoader/dist/cornerstoneWADOImageLoader.min.js'
                ],
                dest: 'examples',
                expand: true,
                flatten: true
            }
        },
        concat: {
            build: {
                src : ['src/cornerstoneFileImageLoader.js', 'src/*.js'],
                dest: 'build/built.js'
            },
            dist: {
                options: {
                    stripBanners: true,
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> ' +
                        '| (c) 2014 Chris Hafey | https://github.com/chafey/cornerstoneFileImageLoader */\n'
                },
                src : ['build/built.js'],
                dest: 'dist/cornerstoneFileImageLoader.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/cornerstoneFileImageLoader.min.js': ['dist/cornerstoneFileImageLoader.js']
                }
            },
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> ' +
                    '| (c) 2015 Chris Hafey | https://github.com/chafey/cornerstoneFileImageLoader */\n'
            }
        },
        jshint: {
            files: [
                'src/*.js'
            ]
        },
        qunit: {
            all: ['test/*.html']
        },
        watch: {
            scripts: {
                files: ['src/*.js', 'test/*.js'],
                tasks: ['concat:build', 'concat:dist', 'jshint', 'qunit']
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('buildAll', ['clean','concat:build', 'concat:dist', 'uglify', 'jshint']);
    grunt.registerTask('default', ['buildAll']);
};

// Release process:
//  1) Update version numbers
//  2) do a build (needed to update dist versions with correct build number)
//  3) commit changes
//      git commit -am "Changes...."
//  4) tag the commit
//      git tag -a 0.1.0 -m "Version 0.1.0"
//  5) push to github
//      git push origin master --tags