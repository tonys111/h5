const Spritesmith = require('spritesmith')
const fs = require('fs')
module.exports = (dir, outFilePath, outCssPath) => {
    if(!dir) throw 'miss dir path'
    if(!outFilePath) throw 'miss dir outFilePath'
    if(!outCssPath) throw 'miss dir outCssPath'
    //获取图片的路径
    const dirFiles = fs.readdirSync(dir)
    const files = []
    const dirPathArr = dir.split('/')
    const dirName = dirPathArr[dirPathArr.length - 1]
    const filePath = `${outFilePath}/${dirName}.png`
    const cssPath = `${outCssPath}/${dirName}.css`

    dirFiles.map(file=>{
        if(file.includes('png') || file.includes('jpg')){
            files.push(`${dir}/${file}`)
        }
    })

    const spritDataFn = files => {
        return new Promise((res, rej)=>{
            Spritesmith.run({ src: files, algorithm: 'left-right' }, (err, result)=>{
                if(err){
                    rej(err)
                } else {
                    res(result)
                }
            })
        })
    }

    const formatCoordinates = coordinates => {
        const arr = []
        for (const key in coordinates) {
            if (coordinates.hasOwnProperty(key)) {
                const el = coordinates[key]
                const pathArr = key.split('/')
                const fileName = pathArr[pathArr.length - 1]
                const name = fileName.replace('.png', '')
                arr.push({
                    name,
                    ...el
                })
            }
        }
        return arr
    }

    const cssStr = spritData => {
        const dirNameArr = dir.split('/')
        const dirName = dirNameArr[dirNameArr.length - 1]
        const { coordinates, properties } = spritData
        const urlArr = filePath.split('/')
        const urlLen = urlArr.length
        const url = `~@/${urlArr[urlLen - 3]}/${urlArr[urlLen - 2]}/${urlArr[urlLen - 1]}`
        let str = `
            .sprite-${ dirName } {
                display: inline-block;
                background-image: url(${ url });
                background-size: ${ properties.width }px ${ properties.height }px;
            }
        `
        Object.keys(coordinates).map( val =>{
            const arr = val.split('/')
            const name = arr[arr.length - 1].replace('.png', '')
            let position = - coordinates[val].x
            str += `
                .${ dirName }-${ name }{
                    background-position: ${ position }px 0;
                    width: ${ coordinates[val].width }px;
                    height: ${ coordinates[val].height }px;
                }
            `
        })
        return str
    }

    async function run(){
        const spritData = await spritDataFn(files)
        fs.writeFileSync(filePath, spritData.image)
        fs.writeFileSync(cssPath, cssStr(spritData))
    }
    run()
}