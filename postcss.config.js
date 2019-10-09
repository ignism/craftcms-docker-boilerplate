const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './theme/src/**/*.vue', 
    './theme/templates/**/*.twig'
  ],
  whitelistPatterns: [/barba-/],
  whitelistPatternsChildren: [/header-main/],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  ident: 'postcss',
  syntax: 'postcss-scss',
  map: {
    inline: true
  },
  plugins: [
    require('postcss-import'), 
    require('postcss-mixins'), 
    require('postcss-nested'),
    require('postcss-easings'),
    require('postcss-advanced-variables'), 
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-object-fit-images'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss, require('cssnano')] : [])
  ]
}
