// Определяем переменную "preprocessor"
let preprocessor = 'sass';
const { src, dest, parallel, series, watch } = require('gulp');

// Подключаем Browsersync
const browserSync = require('browser-sync').create();

// Подключаем gulp-concat
const concat = require('gulp-concat');

// Подключаем gulp-uglify-es
const uglify = require('gulp-uglify-es').default;

// Подключаем модули gulp-sass и gulp-less
let sass = require('gulp-sass')(require('sass'));
const less = require('gulp-less');

// Подключаем Autoprefixer
const autoprefixer = require('gulp-autoprefixer');

// Подключаем модуль gulp-clean-css
const cleancss = require('gulp-clean-css');
function browsersync() {
	browserSync.init({ // Инициализация Browsersync
		server: { baseDir: './app/' }, // Указываем папку сервера
		notify: false, // Отключаем уведомления
		online: true // Режим работы: true или false
	})
}

function styles() {
	return src('./app/sass/*.scss') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
	// .pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
	// .pipe(concat('app.min.css')) // Конкатенируем в файл app.min.js
	// .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
	// .pipe(cleancss( { level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ } )) // Минифицируем стили
	// .pipe(dest('./app/css/')) // Выгрузим результат в папку "app/css/"
	.pipe(sass())
  .pipe(dest('./app/css'))
  .pipe(browserSync.reload({
    stream:true
  })) // Сделаем инъекцию в браузер
}

// function buildcopy() {
// 	return src([ // Выбираем нужные файлы
// 		'./app/css/*.css',
// 		'./app/*.html',
// 		], { base: './app' }) // Параметр "base" сохраняет структуру проекта при копировании
// 	.pipe(dest('./dist')) // Выгружаем в папку с финальной сборкой
// }

// function cleandist() {
// 	return src('./dist', {allowEmpty: true}).pipe(clean()) // Удаляем папку "dist/"
// }

function startwatch() {
 
	// Выбираем все файлы JS в проекте, а затем исключим с суффиксом .min.js
	
	// Мониторим файлы препроцессора на изменения
	watch('./app/sass/*scss', styles);
  watch('./app/*.html').on('change', browserSync.reload);
	
 
}
exports.browsersync = browsersync;
exports.styles = styles;
exports.build = series(styles);
exports.default = parallel(styles, browsersync, startwatch);






// // const gulp = require('gulp'),
// //   sass = require('gulp-sass')(require('sass')),
// //   autoprefixer = require('gulp-autoprefixer'),
// //   cssnano = require('gulp-cssnano');
// // const browserSync = require('browser-sync').create();

// // gulp.task('scss', () => {
// //   return gulp
// //   .src('./app/sass/*.scss')
// //   .pipe(sass())
// //   .pipe(
// //     autoprefixer(['last 15 version', '> 1%', 'ie 8', 'ie 7'], {
// //       cascade: true
// //     })
// //   )
// //   .pipe(cssnano())
// //   .pipe(gulp.dest('./app/css/'))
// // });

// // gulp.task('default', gulp.series('scss'), () => {
// //   gulp.watch('./app/sass/*.scss', ['scss']);
// //   browserSync.init({
// //     server: "./app" 
// //   });
// // });

// // gulp.task('default',gulp.series('styles'), () =>{
  
// // });
// // function browsersync() {
// // 	browserSync.init({ // Инициализация Browsersync
// // 		server: { baseDir: 'app/' }, // Указываем папку сервера
// // 		notify: false, // Отключаем уведомления{}
// // 		online: true // Режим работы: true или false
// // 	})
// // }




// // const gulp = require('gulp'),
// //   sass = require('gulp-sass')(require('sass')),
// //   autoprefixer = require('gulp-autoprefixer'),
// //   cssnano = require('gulp-cssnano');
// // const browserSync = require('browser-sync').create();
// // gulp.task('sass', function() {
// //   return gulp.src('./app/sass/*.scss') // Получает все файлы с расширением .scss из папки app/scss
// //     .pipe(sass())
// //     .pipe(gulp.dest('./app/css'))
// //     .pipe(browserSync.reload({
// //       stream: true
// //     }))
// // });

// // gulp.task('watch', ['browserSync', 'sass'], function (){
// //   gulp.watch('app/scss/**/*.scss', ['sass']); 
// //   // Перезагрузка браузера при изменении файлов HTML или JS
// //   gulp.watch('app/*.html', browserSync.reload); 
// //   gulp.watch('app/js/**/*.js', browserSync.reload); 
// // });


// // Определяем переменную "preprocessor"
// let preprocessor = 'sass'; 
 
// // Определяем константы Gulp
// const { src, dest, parallel, series, watch } = require('gulp');
 
// // Подключаем Browsersync
// const browserSync = require('browser-sync').create();
 
// // Подключаем gulp-concat
// const concat = require('gulp-concat');
 
// // Подключаем gulp-uglify-es
// const uglify = require('gulp-uglify-es').default;
 
// // Подключаем модули gulp-sass и gulp-less
// const sass = require('gulp-sass')(require('sass'));
// const less = require('gulp-less');
 
// // Подключаем Autoprefixer
// const autoprefixer = require('gulp-autoprefixer');
 
// // Подключаем модуль gulp-clean-css
// const cleancss = require('gulp-clean-css');
 
// // Подключаем compress-images для работы с изображениями
// const imagecomp = require('compress-images');
 
// // Подключаем модуль gulp-clean (вместо del)
// const clean = require('gulp-clean');
 
// // Определяем логику работы Browsersync
// function browsersync() {
// 	browserSync.init({ // Инициализация Browsersync
// 		server: { baseDir: './app' }, // Указываем папку сервера
// 		notify: false, // Отключаем уведомления
// 		online: true // Режим работы: true или false
// 	})
// }
 
// function scripts() {
// 	return src([ // Берем файлы из источников
// 		'node_modules/jquery/dist/jquery.min.js', // Пример подключения библиотеки
// 		'app/js/app.js', // Пользовательские скрипты, использующие библиотеку, должны быть подключены в конце
// 		])
// 	.pipe(concat('app.min.js')) // Конкатенируем в один файл
// 	.pipe(uglify()) // Сжимаем JavaScript
// 	.pipe(dest('app/js/')) // Выгружаем готовый файл в папку назначения
// 	.pipe(browserSync.stream()) // Триггерим Browsersync для обновления страницы
// }
 
// function styles() {
// 	return src('./app' + preprocessor + 'main.' + preprocessor + '') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
// 	.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
// 	.pipe(concat('app.min.css')) // Конкатенируем в файл app.min.js
// 	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
// 	.pipe(cleancss( { level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ } )) // Минифицируем стили
// 	.pipe(dest('./app/css/')) // Выгрузим результат в папку "app/css/"
// 	.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
// }
 
// async function images() {
// 	imagecomp(
// 		"./app/images/src/**/*", // Берём все изображения из папки источника
// 		"app/images/dest/", // Выгружаем оптимизированные изображения в папку назначения
// 		{ compress_force: false, statistic: true, autoupdate: true }, false, // Настраиваем основные параметры
// 		{ jpg: { engine: "mozjpeg", command: ["-quality", "75"] } }, // Сжимаем и оптимизируем изображеня
// 		{ png: { engine: "pngquant", command: ["--quality=75-100", "-o"] } },
// 		{ svg: { engine: "svgo", command: "--multipass" } },
// 		{ gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
// 		function (err, completed) { // Обновляем страницу по завершению
// 			if (completed === true) {
// 				browserSync.reload()
// 			}
// 		}
// 	)
// }
 
// function cleanimg() {
// 	return src('app/images/dest/', {allowEmpty: true}).pipe(clean()) // Удаляем папку "app/images/dest/"
// }
 
// function buildcopy() {
// 	return src([ // Выбираем нужные файлы
// 		'./app/css/*.min.css',
// 		'./app/js/*.min.js',
// 		'./app/*.html',
// 		], { base: './app' }) // Параметр "base" сохраняет структуру проекта при копировании
// 	.pipe(dest('dist')) // Выгружаем в папку с финальной сборкой
// }
 
// function cleandist() {
// 	return src('dist', {allowEmpty: true}).pipe(clean()) // Удаляем папку "dist/"
// }
 
// function startwatch() {
 
// 	// Выбираем все файлы JS в проекте, а затем исключим с суффиксом .min.js

	
// 	// Мониторим файлы препроцессора на изменения
// 	watch('./app/**/' + preprocessor + '/**/*', styles);
 
// 	// Мониторим файлы HTML на изменения
// 	watch('./app/*.html').on('change', browserSync.reload);
 
// 	// Мониторим папку-источник изображений и выполняем images(), если есть изменения
 
// }
 
// // Экспортируем функцию browsersync() как таск browsersync. Значение после знака = это имеющаяся функция.
// exports.browsersync = browsersync;
 
// // Экспортируем функцию scripts() в таск scripts
 
// // Экспортируем функцию styles() в таск styles
// exports.styles = styles;
 
// // Экспорт функции images() в таск images
 
// // Экспортируем функцию cleanimg() как таск cleanimg
 
// // Создаем новый таск "build", который последовательно выполняет нужные операции
// exports.build = series(cleandist, styles, buildcopy);
 
// // Экспортируем дефолтный таск с нужным набором функций
// exports.default = parallel(styles, browsersync, startwatch);
