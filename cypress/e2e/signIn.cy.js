/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login');

    cy.get('input[type="email"]').type('useralex1@gmail.com');

    cy.get('input[type="password"]').type('User99!$');
    cy.contains('.btn', 'Sign in').click();

    cy.get('.nav-link')
      .should('contain.text', 'useralex');
  });
});
