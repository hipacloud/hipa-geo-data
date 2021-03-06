const fs = require('fs');

let rawdata = fs.readFileSync('./data/province-city-district.json');
let data = JSON.parse(rawdata);

function unwind(item, dest) {
    dest.push({ code: item.value, name: item.label });
    (item.children || []).forEach(child => unwind(child, dest));
}

let newData = [];
data.forEach(item => unwind(item, newData));

try {
    const data = fs.writeFileSync('./data/unwind-data.json', JSON.stringify(newData), {flag: 'w'});
    //file written successfully
    console.log('generated!')
} catch (err) {
    console.error(err)
}
