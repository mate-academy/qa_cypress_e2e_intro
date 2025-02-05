/// <reference types="cypress" />

const { generateUser } = require('../support/generateUser.js');

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/user/login');
  });

  it('should provide an ability to log in', () => {
    const { username, email, password } = generateUser();

    cy.request('POST', 'https://conduit.mate.academy/api/users', {
      user: { username, email, password }
    });

    cy.get('h1').should('contain.text', 'Sign in');

    cy.get('[placeholder=Email]').type(email);
    cy.get('[placeholder=Password]').type(password);
    cy.contains('button', 'Sign in').should('exist').click();
    cy.contains('a', username).should('exist');
  });
});
