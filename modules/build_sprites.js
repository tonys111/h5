const path = require('path')
const fs = require('fs')
const createSprite = require('./create_sprite')
const entrySprite = path.resolve(__dirname, '..', './src/sprite/entry')
const outFilePath = path.resolve(__dirname, '..', './src/sprite/out')
const outCssPath = path.resolve(__dirname, '..', './src/sprite/css')
const files = fs.readdirSync(entrySprite)
const exists = path => fs.existsSync(path) || path.existsSync(path)
const isDir = path => exists(path) && fs.statSync(path).isDirectory()
const delDir = path => {
    let files = [];
    if(fs.existsSync(path)){
        files = fs.readdirSync(path);
        files.forEach((file) => {
            let curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()){
                delDir(curPath); //递归删除文件夹
            } else {
                fs.unlinkSync(curPath); //删除文件
            }
        });
        fs.rmdirSync(path);
    }
}

let common = ''

delDir(outFilePath)
delDir(outCssPath)
fs.mkdirSync(outFilePath)
fs.mkdirSync(outCssPath)

for (const i of files) {
    const filePath = entrySprite + '/' + i
    const flag = isDir(filePath)
    if(flag) {
        const filePathArr = filePath.split('/')
        const cssName = filePathArr[filePathArr.length - 1]
        common += `@import './${cssName}';`
        createSprite(filePath, outFilePath, outCssPath)
    }
}
fs.writeFileSync(outCssPath + '/common.css', common)