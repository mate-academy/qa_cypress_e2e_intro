const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium') {
          launchOptions.args.push('--blink-settings=imagesEnabled=false');
        }
        return launchOptions;
      });
    },
    baseUrl: 'https://conduit.mate.academy/',
    viewportWidth: 1024,
    viewportHeight: 768
  }
});
