/// <reference types="cypress" />

const { generateUser } = require('../support/generateUser');

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const { email, username, password } = generateUser();
    cy.request('POST', 'https://conduit.mate.academy/api/users', {
      user: {
        email,
        username,
        password,
      },
    });
    cy.visit('/user/login');
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.contains('.btn', 'Sign in').click();

    cy.get('.nav-link').should('contain.text', username);
  });
});
