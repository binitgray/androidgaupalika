const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");


const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',  // Disable PWA in development mode
});
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://202.51.74.85', 
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Proxy API requests to the backend server in development mode
      config.devServer = {
        ...config.devServer,
        proxy: {
          '/api': {
            target: 'http://202.51.74.85',
            changeOrigin: true,
          },
        },
      };
    }
    return config;
  },
};

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    return withPWA({
      reactStrictMode: true,
      // Any other next.js configurations can go here
    });
  }
  return {
    reactStrictMode: true,
    // Any other next.js configurations can go here
  };
};
