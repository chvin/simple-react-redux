var webpack = require('webpack');
var autoprefixer = require('autoprefixer');//自动修补css浏览器前缀
module.exports = {
    devtool: 'eval-source-map',//生成source map以追踪js错误
    entry:  __dirname + "/app/main.js",//js入口
    output: {
        path: __dirname + "/public",//输出路径
        filename: "bundle.js"//输出名
    },

    module:{
      loaders:[
          {
              test:/\.json$/,//json loader
              loader:'json'
          },
          {
              test:/\.js$/,//js loader
              exclude:/node_modules/,
              loader:'babel'//更多配置在.babelrc
          },
          {
              test:/\.css$/,//css loader
              loader:'style!css?!postcss'
              // loader:'style!css?modules!postcss'//css模块化
          },
      ]
    },

    devServer: {//webpack-dev-server 配置
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot:true//热更新
    },
    postcss:[
        autoprefixer({browsers:['last 10 versions']})//postcss 插件
    ],

    plugins:[
        new webpack.BannerPlugin('Copyright Chvin'),//添加 js头
        new webpack.HotModuleReplacementPlugin()//热更新
    ]
}