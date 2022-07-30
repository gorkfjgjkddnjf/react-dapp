const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
      '@data': path.resolve(__dirname, 'src/data/'),
      '@domain': path.resolve(__dirname, 'src/domain/'),
    }
  }
}