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

Cypress.Commands.add('findByPlaceholder', (placeholder) => {
  cy.get(`[placeholder="${placeholder}"]`)
})

Cypress.Commands.add('registerNewUser', (username, email, password) => {
  cy.findByPlaceholder('Username')
    .type(username);

  cy.findByPlaceholder('Email')
    .type(email);

  cy.findByPlaceholder('Password')
    .type(password);

  cy.contains('button', 'Sign in')
    .click();
})

Cypress.Commands.add('logout', () => {
  cy.contains('a', 'Settings')
    .click();

  cy.contains('button', 'Or click here to logout.')
    .click();
})
