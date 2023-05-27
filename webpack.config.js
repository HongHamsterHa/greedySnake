// 引入包
const path = require('path')
// 引入HTML插件
const HTMLwebpackPlugin = require('html-webpack-plugin')
// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// webpack中所有的配置信息都应该在这里面写
module.exports = {
  // 入口
  entry: "./src/index.ts",
  // 打包文件所在目录
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  // 指定webpack打包时要使用的模块
  module: {
    // 指定加载的规则
    rules: [
      {
        // test 指定规则生效的文件
        test: /\.ts$/,  // 以ts结尾的文件
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: 'babel-loader',
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    targets: {
                      "chrome": "88" //表示浏览器需要兼容到chrome88
                    },
                    "corejs": "3",  //指定core.js版本
                    "useBuiltIns": "usage", //使用core.js的方式，usage：按需加载
                  }
                ]
              ]
            }
          },
          'ts-loader',
        ],
        exclude: /node-modules/
      },

      // 设置less文件的处理
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },

  // 配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLwebpackPlugin({
      // title: "自定义title"
      template: "./src/index.html"
    })
  ],

  // 设置引用模块
  resolve: {
    // 以ts或js结尾的文件都可以作为模块使用
    extensions: ['.ts', '.js']
  }
}