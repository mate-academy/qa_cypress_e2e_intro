const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://react-redux.realworld.io', // główny URL
    setupNodeEvents(on, config) {
      // Tutaj można dodać dodatkowe hooki node
      return config;
    },
    env: {
      USER_EMAIL: 'joannakoloczek1@gmail.com',
      USER_PASSWORD: 'Szczurojeb57!',
      USER_NAME: 'Jo',
      BACKUP_URL: 'https://conduit.mate.academy'
    },
    defaultCommandTimeout: 10000, // zwiększony timeout dla dynamicznie ładowanych elementów
  },
});


