
module.exports = {
  plugins: [
    require("postcss-preset-env")({
      browsers: [
        "last 2 version",
        "> 1%"
    ]
    }),
    require("postcss-px-to-viewport")({
      viewportWidth: 1920, //视窗的宽度,对应设计稿的宽度
      viewportHeigth: 1080, //视窗的高度
      unitPrecision: 5, //指定'px'转换为视窗单位值的小数位数
      viewportUnit: "vw", //指定需要转换成的视窗单位,建议使用vw
      selectorBlackList: [], //指定不需要转换的类
      minPixelValue: 1,  //最小转换值
      mediaQuery: false,//允许在媒体查询中转换为‘px’,使用媒体查询，再对一些东西进行配置
      // exclude: [/TabBar/]  //不需要转化的组件文件名正则，必须是正则表达式
    }),
  ]
}