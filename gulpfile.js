'use strict';

// require modules/dependencies
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    nodemon = require('gulp-nodemon'),
    pug = require('gulp-pug'),
    browserSync = require('browser-sync'),
    sync = require('run-sequence'),
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
        .pipe(gulp.dest(paths.public))
        .pipe(browserSync.stream());
});

gulp.task('sass2css', () => {
    gulp.src(paths.sass)
        .pipe(sass())
        .pipe(gulp.dest(paths.public + '/css'))
        .pipe(browserSync.stream());
});

gulp.task('buildJS', () => {
    gulp.src(paths.entryJs)
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest(paths.public))
        .pipe(browserSync.stream());
});

gulp.task('watch', () => {
    browserSync.init(null, {
        proxy: 'localhost:4000',
        port: 5000,
        browser: 'google chrome'
    });
    gulp.watch(paths.sass, ['sass2css']);
    gulp.watch(paths.pug, ['pug2html']);
    gulp.watch(paths.entryJs, ['buildJS']);
});


gulp.task('build', ['pug2html', 'buildJS']);

gulp.task('default', (done) => {
    sync('build', 'watch', done);
});
