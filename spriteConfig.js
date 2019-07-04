const path = require('path')
const fs = require('fs')
const SpritesmithPlugin = require('webpack-spritesmith')
const entrySprite = path.resolve(__dirname, './src/assets/entry_sprite')
const files = fs.readdirSync(entrySprite)
const spriteConfig = []
function exists(path){  
    return fs.existsSync(path) || path.existsSync(path);  
}  
function isDir(path){  
    return exists(path) && fs.statSync(path).isDirectory();  
}
function spritPlugin(folderPath, name){
    return new SpritesmithPlugin({
        //目标小图标，这里就是你需要整合的小图片的老巢。现在是一个个的散兵，把他们位置找到，合成一个
        src: {
            cwd: folderPath,
            glob: '*.png'
        },
        // 输出雪碧图文件及样式文件，这个是打包后，自动生成的雪碧图和样式，自己配置想生成去哪里就去哪里
        target: {
            image: path.resolve(__dirname, `./src/assets/out_sprite/${ name }.png`),
            css: [
                [path.resolve(__dirname, `./src/assets/css/sprite/${ name }.css`), {
                    // 引用自己的模板
                    format: 'function_based_template'
                }],
            ]
        },
        // 自定义模板入口，我们需要基本的修改webapck生成的样式，上面的大函数就是我们修改的模板
        customTemplates: {
            'function_based_template': templateFunction,
        },
        // 样式文件中调用雪碧图地址写法（Readme这么写的）
        apiOptions: {
            cssImageRef: '~sprite.png'
        },
        // 让合成的每个图片有一定的距离，否则就会紧挨着，不好使用
        spritesmithOptions: {
            padding: 20
        }
    })
}

function templateFunction(data) {
    var shared = '.icon { background-image: url(I);background-size: Wpx Hpx;}'.replace('I', data.sprites[0].image).replace('W', data.spritesheet.width).replace('H', data.spritesheet.height)
    var perSprite = data.sprites.map(function (sprite) {
        return '.icon-N { width: Wpx; height: Hpx; background-position: Xpx Ypx; }'
            .replace('N', sprite.name)
            .replace('W', sprite.width)
            .replace('H', sprite.height)
            .replace('X', sprite.offset_x)
            .replace('Y', sprite.offset_y);
    }).join('\n');

    return shared + '\n' + perSprite;
}

for (const i of files) {
    const filePath = entrySprite + '/' + i
    const flag = isDir(filePath)
    if(flag){
        // console.log(filePath)
        // console.log(i)
        // console.log(spritPlugin(filePath, i))
        spriteConfig.push(spritPlugin(filePath, i))
    }
}

module.exports = spriteConfig