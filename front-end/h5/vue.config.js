// const ProxyAgent = require('proxy-agent')
const isProd = process.env.NODE_ENV === 'production'
const DEV_API_ORIGIN = 'http://localhost:1337'
// const DEV_API_ORIGIN = 'https://luban-h5-api.herokuapp.com'

module.exports = {
  runtimeCompiler: true,
  // 因为需要部署到 github pages，所以需要将 publicPath 设为 "/< GitHub Repo Name>/"
  publicPath: isProd ? (process.env.PUBLIC_PATH || '/luban-h5/') : '/',
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page'
    }
    // engine: {
    //   entry: 'src/engine-entry.js'
    // }
  }
}
