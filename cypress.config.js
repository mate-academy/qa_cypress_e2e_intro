const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-redux.realworld.io',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
    }
  }
});
