const spriteConfig = require('./spriteConfig')

module.exports = {
    // devServer: {
    //     proxy: 'http://localhost:4000'
    // }，
    //vue-cli脚手架自动将懒加载使用预加载方式处理了
    chainWebpack: config => {
        config.plugins.delete('prefetch')
    },

    configureWebpack: config => {
        //合并图片后输出目录
        config.resolve.modules = ['node_modules', './src/assets/images']
        // 定义一个插件数组。用来覆盖，在里面使用我们的主角
        const Plugins = spriteConfig
        // config里面，覆盖掉以前的，要不然不好使
        config.plugins = [...config.plugins, ...Plugins]
    }
}