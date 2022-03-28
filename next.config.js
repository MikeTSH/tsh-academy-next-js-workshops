const withPlugins = require('next-compose-plugins');

const splitChunks = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.isServer) {
        config.optimization.splitChunks.chunks = 'all';
        config.optimization.splitChunks.cacheGroups = {
          '@mui': {
            test: /[\\/]node_modules[\\/](@mui)[\\/]/,
            name: '@mui',
            reuseExistingChunk: false,
          },
          '@emotion': {
            test: /[\\/]node_modules[\\/](@emotion)[\\/]/,
            name: '@emotion',
            reuseExistingChunk: false,
          },
          '@popperjs': {
            test: /[\\/]node_modules[\\/](@popperjs)[\\/]/,
            name: '@popperjs',
            reuseExistingChunk: false,
          },
        };
      }

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

      config.images = {
        domains: ['fakestoreapi.com'],
        deviceSizes: [768, 1024, 1440],
        imageSizes: [332, 480],
      };

      return config;
    },
  ])(phase, args);
};
