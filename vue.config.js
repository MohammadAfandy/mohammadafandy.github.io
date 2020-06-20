module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mohammadafandy.github.io/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}