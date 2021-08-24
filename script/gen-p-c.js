const fs = require('fs');

let rawdata = fs.readFileSync('./data/province-city-district.json');
let data = JSON.parse(rawdata);
const newData = data.map(item => {
  const children = item.r.map(child => {
    return ({ c: child.c, n: child.n });
  });
  if (children.length > 0) {
    return ({ c: item.c, n: item.n, r: children });
  } else return { c: item.c, n: item.n };
});

try {
  const data = fs.writeFileSync('./data/province-city.json', JSON.stringify(newData), {flag: 'w'});
  //file written successfully
  console.log('generated!')
} catch (err) {
  console.error(err)
}
