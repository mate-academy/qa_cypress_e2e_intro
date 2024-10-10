const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Події можна налаштувати тут
    },
    excludeSpecPattern: ['**/AppData/**'], // Виключити всі шляхи, що включають AppData
    baseUrl: 'https://react-redux.realworld.io',
    supportFile: 'cypress/support/e2e.js'
  }
});
