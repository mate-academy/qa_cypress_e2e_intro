/// <reference types="cypress" />

const { generateUser } = require('../support/generateUser');

describe('Visit', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should visit sign in page', () => {
    cy.contains(':nth-child(2) > .nav-link', 'Sign in').click();
    cy.url().should('include', '/login');
  });

  it('should log in with the user', () => {
    const { username, email, password } = generateUser();

    cy.request('POST', 'https://conduit.mate.academy/api/users', {
      user: {
        email,
        username,
        password
      }
    });

    cy.contains(':nth-child(2) > .nav-link', 'Sign in').click();
    cy.get('[placeholder=Email]').should('exist').type(email.toLowerCase());
    cy.get('[placeholder=Password]').should('exist').type(password);
    cy.contains('.btn', 'Sign in').click();

    cy.contains(
      ':nth-child(4) > .nav-link',
      `${username.toLowerCase()}`
    ).should('exist');
  });
});
