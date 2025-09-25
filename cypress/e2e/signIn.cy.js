/// <reference types="cypress" />

const {
  generateUser
} = require('../support/generate');

describe('Sign In page', () => {
  const {
    userName,
    email,
    password
  } = generateUser();

  it('should provide an ability to log in', () => {
    cy.visit('/');

    cy.request('POST', `${Cypress.config('baseUrl')}/api/users`, {
      user: {
        username: userName,
        email,
        password
      }
    }).then(() => {
      cy.visit('/user/login');

      cy.get('[placeholder="Email"]')
        .type(email);

      cy.get('[placeholder="Password"]')
        .type(password);

      cy.contains('button', 'Sign in')
        .click();

      cy.url()
        .should('not.include', '/login');

      cy.get('nav').contains(userName).should('be.visible');
    });
  });
});
