'use strict';

// require modules/dependencies
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    nodemon = require('gulp-nodemon'),
    pug = require('gulp-pug'),
    browserSync = require('browser-sync');

// paths
const paths = {
    sass: 'app/sass/**/*.scss',
    pug: ['!app/shared-views/**', 'app/**/*.pug'],
    js: 'app/js/**/*.js',
    public: 'public/'
};

// gulp tasks
gulp.task('pug2html', () => {
    gulp.src(paths.pug)
        .pipe(pug())
        .pipe(gulp.dest(paths.public))
        .pipe(browserSync.stream());
});

gulp.task('sass2css', () => {
    gulp.src(paths.sass)
        .pipe(sass())
        .pipe(gulp.dest(paths.public + '/css'))
        .pipe(browserSync.stream());
});

gulp.task('watchJSFiles', () => {
    gulp.src(paths.js)
        .pipe(browserSync.stream());
});

gulp.task('nodemon', () => {
    nodemon({
            script: 'index.js',
            ext: 'js',
            ignore: ['public/', 'node_modules/']
        })
        .on('restart', function() {
            console.log('>> node restart');
        });
});

gulp.task('watch&reload', () => {
    browserSync.init(null, {
        proxy: 'http://localhost:4000',
        port: 3000,
        browser: 'google chrome'
    });
    gulp.watch(paths.sass, ['sass2css']);
    gulp.watch(paths.pug, ['pug2html']);
    gulp.watch(paths.js, ['watchJSFiles']);
});

gulp.task('build', ['pug2html', 'sass2css']);
gulp.task('default', ['build', 'nodemon', 'watch&reload']);
