const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'https://conduit.mate.academy',
    env: {
      EMAIL: process.env.CYPRESS_EMAIL || 'arberzylyftari@gmail.com',
      PASSWORD: process.env.CYPRESS_PASSWORD || 'test123',
      USERNAME: process.env.CYPRESS_USERNAME || 'arberZ'
    },
    setupNodeEvents(on, config) {
      return config;
    }
  }
});
