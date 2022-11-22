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
	return src('./app/sass/main.scss') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
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
