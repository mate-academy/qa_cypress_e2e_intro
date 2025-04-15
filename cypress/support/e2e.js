// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import custom commands if defined
import './commands'; // Keep this if you have custom commands in commands.js

// Handle uncaught exceptions to prevent test failures
Cypress.on('uncaught:exception', (err, runnable) => {
  // Log the error for debugging purposes
  // eslint-disable-next-line no-console
  console.error('Uncaught exception:', err);

  // Returning false here prevents Cypress from failing the test
  return false;
});
