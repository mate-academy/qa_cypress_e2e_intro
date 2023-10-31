/// <reference types="cypress" />

describe('Sign In page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('should provide an ability to log in', () => {
    cy.contains('a', 'Sign in').click();

    cy.get('input[type="email"]')
      .type('alpha_user@gmail.com');

    cy.get('input[type="password"]')
      .type('User12345@');

    cy.get('button[type="submit"]')
      .click();

    cy.get('.nav-link')
      .should('contain', 'alpha_user');
  });
});
