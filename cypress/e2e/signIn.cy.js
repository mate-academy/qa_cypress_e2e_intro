/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/user/login')
      .get('h1')
      .should('contain.text', 'Sign in');

    cy.get('[type="email"]')
      .type('test1@gmail.com');

    cy.get('[type="password"]')
      .type('test12345');

    cy.get('.btn').click();

    cy.get('.nav-link').contains('Home');
  });
});
