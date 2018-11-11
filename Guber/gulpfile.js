'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    pug=require('gulp-pug'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    pngquant = require('imagemin-pngquant'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;
var path = {
        build: { //Тут мы укажем куда складывать готовые после сборки файлы
            html: 'build/',
            js: 'build/js/',
            css: 'build/css/',
            img: 'build/img/',
            fonts: 'build/fonts/',
            pug:'src/template/'
        },
        src: { //Пути откуда брать исходники
            html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
            js: 'src/js/main.js', //В стилях и скриптах нам понадобятся только main файлы
            style: 'src/style/*.less',
            img: 'src/images/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
            fonts: 'src/fonts/**/*.*',
            pug:'src/pug/*.pug'
        },
        watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
            html: 'src/**/*.html',
            js: 'src/js/**/*.js',
            style: 'src/style/**/*.less',
            img: 'src/images/**/*.*',
            fonts: 'src/fonts/**/*.*',
            pug:'src/pug/**/*.pug'

        },
        clean: './build'
    };
    var config = {
        server: {
            baseDir: "./build"
        },
        tunnel: true,
        host: 'localhost',
        port: 9000,
        logPrefix: "Frontend_Devil"
    };
    gulp.task('html', function () {
        return gulp.src(path.src.html) //Выберем файлы по нужному пути
            .pipe(rigger()) //Прогоним через rigger
            .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
            .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
    });
    gulp.task('js', function () {
        gulp.src(path.src.js) //Найдем наш main файл
            .pipe(rigger()) //Прогоним через rigger
            
            .pipe(uglify()) //Сожмем наш js
            
            .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
            .pipe(reload({stream: true})); //И перезагрузим сервер
    });
    gulp.task('style', function () {
        gulp.src(path.src.style) //Выберем наш main.scss
            .pipe(sourcemaps.init()) //То же самое что и с js
            .pipe(less()) //Скомпилируем
            .pipe(prefixer()) //Добавим вендорные префиксы
            .pipe(cssmin()) //Сожмем
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(path.build.css)) //И в build
            .pipe(reload({stream: true}));
    });
    gulp.task('image', function () {
        gulp.src(path.src.img) //Выберем наши картинки
            .pipe(imagemin({ //Сожмем их
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngquant()],
                interlaced: true
            }))
            .pipe(gulp.dest(path.build.img)) //И бросим в build
            .pipe(reload({stream: true}));
    });
    gulp.task('fonts', function() {
        gulp.src(path.src.fonts)
            .pipe(gulp.dest(path.build.fonts))
    });
    gulp.task('pug', function() {
        return gulp.src(path.src.pug)
            .pipe(rigger())
            .pipe(pug())
            .pipe(gulp.dest(path.build.pug))
            .pipe(reload({stream: true}));
      });
    gulp.task('build', [
        'html',
        'js',
        'style',
        'fonts',
        'image',
        'pug'
    ]);
    
    gulp.task('watch', function(){
        watch([path.watch.html], function(event, cb) {
            gulp.start('html');
        });
        watch([path.watch.style], function(event, cb) {
            gulp.start('style');
        });
        watch([path.watch.js], function(event, cb) {
            gulp.start('js');
        });
        watch([path.watch.img], function(event, cb) {
            gulp.start('image');
        });
        watch([path.watch.fonts], function(event, cb) {
            gulp.start('fonts');
        });
        watch([path.watch.pug], function(event, cb) {
            gulp.start('pug');
        });
    });
    gulp.task('server', function () {
        browserSync(config);
    });
    gulp.task('clean', function (cb) {
        rimraf(path.clean, cb);
    });
    gulp.task('default', ['build', 'server', 'watch']);