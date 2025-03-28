const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-redux.realworld.io/',
    password: 'K123456$k',
    setupNodeEvents(on, config) {
    }
  }
});
