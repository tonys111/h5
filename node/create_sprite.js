const Spritesmith = require('spritesmith')
const templater = require('spritesheet-templates')
const fs = require('fs')
module.exports = (
    dir, 
    outFilePath = `${dir}/sprit.png`, 
    outCssPath = `${dir}/sprit.css`,
    ) => {
    if(!dir) throw 'miss dir path'
    //获取图片的路径
    const dirFiles = fs.readdirSync(dir)
    const files = []
    
    dirFiles.map(file=>{
        files.push(`${__dirname}/img/${file}`)
    })

    const spritDataFn = files => {
        return new Promise((res, rej)=>{
            Spritesmith.run({ src: files }, (err, result)=>{
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

    async function run(){
        const spritData = await spritDataFn(files)
        const css = templater({
            sprites: formatCoordinates(spritData.coordinates),
            spritesheet: { ...spritData.properties, image: outFilePath }
        })
        fs.writeFileSync(outFilePath, spritData.image)//输出合并的图片
        fs.writeFileSync(outCssPath, css)//输出css
    }
    run()
}