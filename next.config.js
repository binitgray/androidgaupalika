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
