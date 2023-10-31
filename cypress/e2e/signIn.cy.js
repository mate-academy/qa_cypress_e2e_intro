/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/');
    cy.contains('a', 'Sign in').click();

    cy.get('[placeholder=Email]')
      .type('alex12345@gmail.com');

    cy.get('[placeholder=Password]')
      .type('vtnfkk00');

    cy.get('.btn')
      .click();

    cy.get('a.nav-link')
      .should('contain', 'alex123457');
  });
});
