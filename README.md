源自 https://github.com/uiwjs/province-city-china

上次更新时间为 数据更新时间：2021/05/11 09:55:00 GMT+0800 (中国标准时间)


data/province.json 省份列表

data/province-city.json 省份 -> 城市 联动列表

data/province-city-district.json 省份 -> 城市 -> 区县 联动列表

dist 文件夹下为压缩后的数据，通过 npm package ，包括

dist/province.min.json

dist/province-city.min.json

dist/province-city-district.min.json


yarn gen-p-c, 根据“省份 -> 城市 -> 区县 联动列表”生成“省份 -> 城市 联动列表”

yarn gen-min, 复制data下的文件到dist并压缩，npm publish 之前的需要执行
