const JSONToExcel = (jsonData, excelname) => {
    // 要导出的json数据，这部分数据可以来自ajax请求
    //列标题，逗号隔开
    let str = '';
    _.map(jsonData[0], function (value, key) {
        str += key + ',';
    })
    str += '\n';

    //增加\t为了不让表格显示科学计数法或者其他格式
    for (let i = 0; i < jsonData.length; i++) {
        for (let item in jsonData[i]) {
            str += `${jsonData[i][item] + '\t'},`;
        }
        str += '\n';
    }
    //encodeURIComponent解决中文乱码， \ufeff是 ""
    let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
    //通过创建a标签实现
    let link = document.createElement("a");
    link.href = uri;
    //对下载的文件命名
    link.download = excelname + '.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
export default JSONToExcel