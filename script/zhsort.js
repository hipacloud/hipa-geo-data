const zhComparator = new Intl.Collator("zh-CN");
var fs = require('fs');

function zhSort(data) {
    return data.sort((aItem, bItem) => {
        if (aItem.label.includes("北京")) return -1;
        if (bItem.label.includes("北京")) return 1;
        if (aItem.children) {
            aItem.children = zhSort(aItem.children);
        }
        if (bItem.children) {
            bItem.children = zhSort(bItem.children);
        }
        return zhComparator.compare(aItem.label, bItem.label);
    });
}

['./data/province-city-district.json', './data/province.json'].forEach(path => {
    let rawdata = fs.readFileSync(path);
    let data = JSON.parse(rawdata);
    const newData = zhSort(data)
    // const newData = data;
    // const newData = data.map(item => {
    //     const children = (item.r || []
    //     ).map(child => {
    //         return ({c: child.c, n: child.n}
    //         );
    //     });
    //     if (children.length > 0) {
    //         return ({c: item.c, n: item.n, r: children}
    //         );
    //     } else return {c: item.c, n: item.n};
    // });

    try {
        const data = fs.writeFileSync(path, JSON.stringify(newData), {flag: 'w'});
        //file written successfully
        console.log('generated!')
    } catch (err) {
        console.error(err)
    }

})