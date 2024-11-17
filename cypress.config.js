const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--incognito');
          return launchOptions;
        }

        if (browser.name === 'electron') {
          launchOptions.preferences.incognito = true;
          return launchOptions;
        }
      });
    },
    baseUrl: 'https://conduit.mate.academy/',
    viewportWidth: 1024,
    viewportHeight: 768
  }
});
