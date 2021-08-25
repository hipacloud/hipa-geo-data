const fs = require('fs');

let rawdata = fs.readFileSync('./data/province-city-district.json');
let data = JSON.parse(rawdata);
const newData = data.map(item => {
    const children = (item.children || []
    ).map(child => {
        return ({value: child.value, label: child.label}
        );
    });
    if (children.length > 0) {
        return ({value: item.value, label: item.label, children: children}
        );
    } else return {value: item.value, label: item.label};
});

try {
    const data = fs.writeFileSync('./data/province-city.json', JSON.stringify(newData), {flag: 'w'});
    //file written successfully
    console.log('generated!')
} catch (err) {
    console.error(err)
}
