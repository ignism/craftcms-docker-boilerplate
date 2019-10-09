const merge = require('webpack-merge')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const TerserPlugin = require('terser-webpack-plugin')
const common = require('./webpack.common.js')

process.env.NODE_ENV = 'production'

module.exports = merge(common, {
  mode: 'production',

  plugins: [
    new BundleAnalyzerPlugin()
  ],

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
})
