const { defineConfig } = require('cypress');

const baseUrl = process.env.CYPRESS_BASE_URL || 'https://conduit.mate.academy';

module.exports = defineConfig({
  e2e: {
    baseUrl,
    env: {
      EMAIL: process.env.CYPRESS_EMAIL || 'user0@mail.com',
      PASSWORD: process.env.CYPRESS_PASSWORD || 'asdf',
      USERNAME: process.env.CYPRESS_USERNAME || 'user0'
    }
  }
});
