var fs = require('fs');

let rawdata = fs.readFileSync('./data/unwind-data.json');
let data = JSON.parse(rawdata);
const result = data.reduce((result, item)=>{
  result[item.code] = item.name;
  return result;
}, {})

fs.writeFileSync('./data/code-to-label.json', JSON.stringify(result), {flag: 'w'})