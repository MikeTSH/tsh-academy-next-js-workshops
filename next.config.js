const withPlugins = require('next-compose-plugins');

const splitChunks = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};

module.exports = (phase, args) => {
  return withPlugins([
    [splitChunks],
    (config) => {
      config.reactStrictMode = true;
      config.trailingSlash = true;
      config.productionBrowserSourceMaps = true;

      // TODO[PERF-2]: Optimize images
      config.images = {};

      return config;
    },
  ])(phase, args);
};
