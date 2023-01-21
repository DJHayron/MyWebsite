module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  },
  pruge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx'
    ]
  }
}