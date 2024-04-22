const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-redux.realworld.io',
    viewportHeight: 500,
    setupNodeEvents(on, config) {
    }
  }
});
