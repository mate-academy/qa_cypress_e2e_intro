import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://conduit.mate.academy',
    setupNodeEvents(on, config) {
      // здесь можно добавить node-события при необходимости
    }
  }
});
