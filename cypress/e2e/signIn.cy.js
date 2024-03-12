/// <reference types="cypress" />
const { generateUser } = require('../support/generate');

describe('Sign In page', () => {
  before(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in', () => {
    const { email, password, username } = generateUser();

    cy.request('POST', 'https://api.realworld.io/api/users', {
      user: {
        username,
        email,
        password
      }
    });

    cy.get('h1')
      .should('contain.text', 'Sign In');

    cy.get('[placeholder=Email]')
      .type(email);

    cy.get('[placeholder=Password]')
      .type(password);

    cy.get('[type="submit"]')
      .should('contain.text', 'Sign in')
      .click();

    cy.get('.navbar .nav-item')
      .contains('a', username);
  });
});
