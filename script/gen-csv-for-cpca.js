var fs = require('fs');
var stringify = require('csv-stringify');

let rawdata = fs.readFileSync('./data/unwind-data.json');
let data = JSON.parse(rawdata);
let formatted_data = data.map(item => {
    return {
        'adcode': item['code'],
        'name': item['name'],
        'longitude': '',
        'latitude': '',
    }
})

stringify(formatted_data, {header: true}, (err, output) => {
    fs.writeFileSync('./data/adcodes.csv', output);
})
