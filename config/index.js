// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var fileExtConfig = {
    swan: {
        template: 'swan',
        script: 'js',
        style: 'css',
        platform: 'swan'
    },
    wx: {
        template: 'wxml',
        script: 'js',
        style: 'wxss',
        platform: 'wx'
    }
}
var fileExt = fileExtConfig[process.env.PLATFORM || 'wx']
module.exports = {
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    fileExt: fileExt
  },
  dev: {
    env: require('./dev.env'),
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    fileExt: fileExt
  }
}
