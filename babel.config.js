module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env', {
        modules: false,
        targets: {
          browsers: ['> 0.5%', 'last 5 versions', 'ie >= 10']
        }
      }
    ]
  ]
  const plugins = []

  return {
    presets,
    plugins
  }
}