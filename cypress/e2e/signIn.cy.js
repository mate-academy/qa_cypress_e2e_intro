/// <reference types="cypress" />

Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://react-redux.realworld.io/#/login');
  cy.get('input[type="email"]').type(email);
  cy.get('input[type="password"]').type(password);
  cy.get('button[type="submit"]').click();
});
