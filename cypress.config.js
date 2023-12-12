const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-redux.realworld.io',
    viewportHeight: 600,
    viewportWidth: 1200,
    setupNodeEvents(on, config) {
    }
  }
});
