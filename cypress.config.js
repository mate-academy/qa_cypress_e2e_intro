const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    env: {
      EMAIL: 'miretta2@ukr.net',
      PASSWORD: 'Miretta29+'
    },
    setupNodeEvents(on, config) {
    }
  }
});
