/// <reference types="cypress" />

describe('Sign In page', () => {
  const user = {
    username: 'liza',
    email: 'liza@gmail.com',
    password: 'liza1234'
  };

  before(() => {
    cy.request({
      method: 'POST',
      url: 'https://conduit.mate.academy/api/users',
      body: { user },
      failOnStatusCode: false
    });
  });

  it('should log in to an existing account', () => {
    cy.visit('/user/login');

    cy.contains('h1', 'Sign in').should('be.visible');

    cy.get('input[type="email"]').type(user.email);
    cy.get('input[type="password"]').type(user.password);
    cy.get('.btn').click();

    cy.url({ timeout: 10000 }).should('not.include', '/login');

    cy.contains('a', user.username, { timeout: 10000 }).should('be.visible');
  });
});
