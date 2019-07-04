module.exports = {
    plugins: {
        precss: {},
        autoprefixer: {},
        'postcss-aspect-ratio-mini': {},
        "postcss-px-to-viewport": {
            // exclude: [],//(Array or Regexp) Ignore some files like 'node_modules'
            // unitToConvert: 'px',// 要转换的单位，默认情况下是px。
            viewportWidth: 750,      // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
            unitPrecision: 3,        // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
            // propList: ['*'],//可以从px更改为vw的属性,。
            viewportUnit: 'vw',      // 指定需要转换成的视窗单位，建议使用vw
            minPixelValue: 1,       // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
            mediaQuery: false       // 允许在媒体查询中转换`px`
        },
        'postcss-viewport-units': {},//必须在postcss-px-to-viewport下面否则无法追加content
    }
}
