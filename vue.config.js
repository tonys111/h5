const spriteConfig = require('./sprite.config')

module.exports = {
    // devServer: {
    //     proxy: {
    //         '/_glaxy_b01_': {
    //             target: 'https://www.lc3750.com/',
    //             changeOrigin: true, // target是域名的话，需要这个参数，
    //             secure: false // 设置支持https协议的代理
    //         }
    //     }
    // },
    // publicPath: process.env.NODE_ENV === 'production'
    // ? 'https://www.lc3750.com/'
    // : '/',
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