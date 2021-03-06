module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        'pages':'@/pages',
        'assets':'@/assets',
        'components':'@/components',
        'common':'@/common'
      }
    }
  },
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:8080',
        pathRewrite:{
          //当请求的是/api开头的，会替换为/mock
          '^/api':'/mock'
        }
      }
    }
  }

}