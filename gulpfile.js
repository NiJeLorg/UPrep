'use strict';

// require modules/dependencies
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    nodemon = require('gulp-nodemon'),
    pug = require('gulp-pug'),
    browserSync = require('browser-sync'),
    webpack = require('webpack-stream');

// paths
const paths = {
    app: ['app/**/*.{js,sass,pug}'],
    sass: 'app/sass/**/*.scss',
    pug: ['!app/shared-views/**', 'app/**/*.pug'],
    entryJs: 'app/js/app.js',
    js: 'app/js/**/*.js',
    public: 'public'
};

// gulp tasks
gulp.task('pug2html', () => {
    gulp.src(paths.pug)
        .pipe(pug())
        .pipe(gulp.dest(paths.public));
});

gulp.task('sass2css', () => {
    gulp.src(paths.sass)
        .pipe(sass())
        .pipe(gulp.dest(paths.public + '/css'));
});

gulp.task('buildJS', () => {
    gulp.src(paths.entryJs)
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest(paths.public));
});

gulp.task('serve', () => {
    browserSync({
        port: process.env.PORT || 4500,
        open: true,
        ghostMode: false,
        server: {
            baseDir: 'public'
        }
    });
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

gulp.task('watch', () => {
    gulp.watch(paths.app, browserSync.reload);
});


gulp.task('build', ['pug2html', 'sass2css', 'buildJS']);
gulp.task('default', ['build', 'nodemon', 'serve', 'watch']);
