var fs = require('fs');

var dir = './dist';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
} else {
  fs.rmdirSync(dir,  { recursive: true });
  fs.mkdirSync(dir);
}


fs.copyFileSync('data/province.json', 'dist/province.min.json');
fs.copyFileSync('data/province-city.json', 'dist/province-city.min.json');
fs.copyFileSync('data/province-city-district.json', 'dist/province-city-district.min.json');
fs.copyFileSync('data/province-city-district-pinyin.json', 'dist/province-city-district-pinyin.min.json');
fs.copyFileSync('data/unwind-data.json', 'dist/unwind-data.min.json');
fs.copyFileSync('data/code-to-label.json', 'dist/code-to-label.min.json');
