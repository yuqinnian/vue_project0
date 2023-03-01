const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:5000',
        pathRewrite:{'^/api':''}, //将api替换成空，这里和下面两个可以不要
        ws:true,  //请求谎言
        changeOrigin:true  //跨域伪造
      }
    }
  }
})
