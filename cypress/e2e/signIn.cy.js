/// <reference types="cypress" />

const { generateUser } = require('../support/generateUser');

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/user/login');
  });

  it('should provide an ability to log in', () => {
    const { email, userName, password } = generateUser();

    cy.get('h1').should('contain.text', 'Sign in');

    cy.request('POST', Cypress.config('baseUrl') + '/api/users', {
      user: {
        username: userName,
        email,
        password
      }
    });

    cy.get('[placeholder="Email"]').type(email);

    cy.get('[placeholder="Password"]').type(password);

    cy.get('button').should('contain.text', 'Sign in').click();

    cy.url().should('equal', Cypress.config().baseUrl + '/');

    cy.get('.nav-link').contains(userName);
  });
});
