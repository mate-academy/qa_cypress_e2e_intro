const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-redux.realworld.io',
    viewportWidth: 500,
    viewportHeight: 700,
    setupNodeEvents(on, config) {
    }
  }
});
