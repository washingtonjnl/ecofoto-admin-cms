const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  env: {
    apiURL: 'http://200.20.113.53:5000',
  },
});
