const path = require('path')
const fs = require('fs')
const createSprite = require('./create_sprite')
const entrySprite = path.resolve(__dirname, '..', './src/assets/sprite/entry')
const files = fs.readdirSync(entrySprite)
const exists = path => fs.existsSync(path) || path.existsSync(path)
const isDir = path => exists(path) && fs.statSync(path).isDirectory()
const outFilePath = path.resolve(__dirname, '..', './src/assets/sprite/out')
const outCssPath = path.resolve(__dirname, '..', './src/assets/sprite/css')
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

delDir(outFilePath)
delDir(outCssPath)
fs.mkdirSync(outFilePath)
fs.mkdirSync(outCssPath)

for (const i of files) {
    const filePath = entrySprite + '/' + i
    const flag = isDir(filePath)
    if(flag) {
        createSprite(filePath, outFilePath, outCssPath)
    }
}