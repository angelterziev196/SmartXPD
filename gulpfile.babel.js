'use strict';

import autoprefixer from 'gulp-autoprefixer';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import eslint from 'gulp-eslint';
import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';

const paths = {
  src: 'src',
  dest: 'build'
}

const stylesPaths = {
  src: `${paths.src}/styles/style.scss`,
  dest: `${paths.dest}/styles/`
}

const staticFilePaths = {
  src: `${paths.src}/static/`,
  dest: `${paths.dest}/static/`
}

const scriptsPaths = {
  src: `${paths.src}/scripts/app.js`,
  dest: `${paths.dest}/scripts/`
}

gulp.task('styles', () => {
  return gulp.src(stylesPaths.src)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(stylesPaths.dest))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('copy', () => {
  return gulp.src(`${ staticFilePaths.src }**/*`).pipe(gulp.dest(staticFilePaths.dest));
});

gulp.task('scripts', () => {
  return browserify(scriptsPaths.src, {debug: true, extensions: ['es6']})
    .transform('babelify', {presets: ['airbnb']})
    .bundle()
    .pipe(source('app.js'))
    //TODO: FIND A WAY TO MAKE THIS WORK :)
    //.pipe(eslint())
    //.pipe(eslint.format())
    //.pipe(eslint.failAfterError())
    .pipe(gulp.dest(scriptsPaths.dest))
    .pipe(browserSync.stream({match: '**/*.js'}))
})

gulp.task('watch', () => {
    gulp.watch(`${paths.src}/scripts/**/*.js`, ['scripts']);
    gulp.watch(`src/styles/**/*.scss`, ['styles']);
    gulp.watch(`${staticFilePaths.src}/**/*`, ['copy']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('serve', ['styles', 'copy', 'scripts', 'watch'], () => {
  browserSync.init({
    server: './'
  })
})