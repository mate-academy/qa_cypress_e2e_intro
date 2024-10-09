const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
     
    },
    env: {
      email: 'mate8568@ukr.net', 
      password: 'Q1w2e3r4',      
    },
  },
});
