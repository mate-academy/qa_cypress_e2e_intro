const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://conduit.mate.academy/',
    env: {
      EMAIL: 'radoslaw.grzymala@hotmail.com',
      PASSWORD: 'Radko!23',
      USERNAME: 'radek'
    },
    setupNodeEvents(on, config) {
    }
  }
});
