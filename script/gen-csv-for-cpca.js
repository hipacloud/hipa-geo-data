var fs = require('fs');
var stringify = require('csv-stringify');

let rawdata = fs.readFileSync('./data/unwind-data.json');
let data = JSON.parse(rawdata);
data.forEach(item => {
    item['longitude'] = '';
    item['latitude'] = ''
})

stringify(data, {header: true}, (err, output) => {
    fs.writeFileSync('./data/adcodes.csv', output);
})
