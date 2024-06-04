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
              destination: 'http://202.51.74.85/', // Proxy to Backend
          }
      ];
  },
  async server({ dev }) {
      if (!dev) {
          const express = require('express');
          const { createProxyMiddleware } = require('http-proxy-middleware');

          const app = express();

          app.use('/api', createProxyMiddleware({
              target: 'http://202.51.74.85/',
              changeOrigin: true,
              pathRewrite: { '^/api': '' },
          }));

          return app;
      }
  }
};

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    return withPWA({
      reactStrictMode: true,
crossOrigin:"anonymous"
      // Any other next.js configurations can go here
    });
  }
  return {
    reactStrictMode: true,
    crossOrigin:"anonymous"

    // Any other next.js configurations can go here
  };
};
