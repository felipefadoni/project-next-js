module.exports = {
  devIndicators: {
    autoPrerender: true
  }
};

module.exports = {
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx']
};

// next.config.js
const withImages = require('next-images');
module.exports = withImages({
  webpack(config, options) {
    return config;
  }
});
