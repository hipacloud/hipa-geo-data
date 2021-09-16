源自 https://github.com/uiwjs/province-city-china

上次更新时间为 数据更新时间：2021/05/11 09:55:00 GMT+0800 (中国标准时间)


data/province.json 省份列表

data/province-city.json 省份 -> 城市 联动列表

data/province-city-district.json 省份 -> 城市 -> 区县 联动列表

data/unwind-data.json 省市区平铺数据

dist 文件夹下为压缩后的数据，通过 npm package ，包括

dist/province.min.json

dist/province-city.min.json

dist/province-city-district.min.json

dist/unwind-data.min.json


yarn gen-p-c, 根据“省份 -> 城市 -> 区县 联动列表”生成“省份 -> 城市 联动列表”

yarn gen-unwind, 根据“省份 -> 城市 -> 区县 联动列表” 生成 “省市区平铺数据”

yarn gen-csv，根据“省市区平铺数据” 生成 csv，⚠️这个必须在gen-unwind后执行，这个csv是给[hipacloud/chinese_province_city_area_mapper]做数据源用的！

yarn gen-min, 复制data下的文件到dist并压缩，npm publish 之前的需要执行


Mobile 端注意事项：
Mobile 的地址需要 pinyin_prefix 属性做索引，pinyin 数据来源：
https://github.com/xiangyuecn/AreaCity-JsSpider-StatsGov/blob/master/src/%E9%87%87%E9%9B%86%E5%88%B0%E7%9A%84%E6%95%B0%E6%8D%AE/ok_data_level3.csv
找不到的拼音需要自己查漏补缺

故更新数据时 province-city-district-pinyin.json 应与 province-city-district.min.json 保持一致，并加上 pinyin_prefix 属性
