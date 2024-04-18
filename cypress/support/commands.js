/// <reference types="cypress" />

Cypress.Commands.add('findByPlaceholder', (placeholderName) => {
  cy.get(`[placeholder=${placeholderName}]`);
});
