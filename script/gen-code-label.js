var fs = require('fs');
const labelMap = {
  "广西壮族自治区": "广西",
  "内蒙古自治区": "内蒙古",
  "宁夏回族自治区": "宁夏",
  "西藏自治区": "西藏",
  "新疆维吾尔自治区": "新疆",
  "中国澳门": "澳门",
  "中国台湾": "台湾",
  "中国香港": "香港",
};
let rawdata = fs.readFileSync('./data/unwind-data.json');
let data = JSON.parse(rawdata);
const result = data.reduce((result, item) => {
  if (item.name.endsWith("省")) {
    result[item.code] = item.name.replace("省", "");
  } else if (labelMap[item.name]) {
    result[item.code] = labelMap[item.name];
  } else
    result[item.code] = item.name;
  return result;
}, {});

fs.writeFileSync('./data/code-to-label.json', JSON.stringify(result), { flag: 'w' });