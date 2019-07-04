const spriteConfig = require('./sprite.config')

module.exports = {
    // devServer: {
    //     proxy: 'http://localhost:4000'
    // }，
    chainWebpack: config => {
        //vue-cli脚手架自动将懒加载使用预加载方式处理了
        config.plugins.delete('prefetch')
        //图片压缩
        config.module
        .rule("image-webpack-loader")
        .test(/\.(gif|png|jpe?g|svg)$/i)
        .use("file-loader")
        .loader("image-webpack-loader")
        .tap(() => ({
          disable: process.env.NODE_ENV !== "production"
        }))
        .end();
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