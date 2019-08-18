let mix = require('laravel-mix');
require('laravel-mix-eslint');

mix.js('src/js/main.js', 'js/min.main.js').eslint({
    fix: false,
    cache: false,
}).sass('src/sass/style.scss', 'css/min.style.css').browserSync({
    proxy: 'localhost:8888',
    files: [
        'js/min.main.js'
    ]
}).options({
    processCssUrls: false
});
