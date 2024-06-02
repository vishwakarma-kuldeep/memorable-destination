module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
        };
      }
  
      return config;
    },
    images: {
      domains: ['placehold.co'],
      dangerouslyAllowSVG: true,
      // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
   
  };