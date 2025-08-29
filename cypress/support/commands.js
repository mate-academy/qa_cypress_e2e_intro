// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (email, password) => {
  cy.intercept('POST', '**/users/login').as('loginRequest');

  cy.visit('/#/login');

  // используем правильные селекторы с таймаутом
  cy.get('input[placeholder="Email"]', { timeout: 10000 }).type(email);
  cy.get('input[placeholder="Password"]', { timeout: 10000 }).type(password);
  cy.get('button[type="submit"]').contains('Sign in').click();

  // ждем успешного ответа API
  cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);
});
