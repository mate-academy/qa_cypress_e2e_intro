/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    // open site;
    cy.visit('https://react-redux.realworld.io');
    cy.visit('https://react-redux.realworld.io/#/login?_k=dg45u4');
    // fill login fields
    cy.get('input[type="email"]').type('kotek1@wp.pl');
    cy.get('input[type="password"]').type('3424qwer');
    // click corect part
    cy.get('button.btn-primary').contains('Sign in').click();
    // pass login
    cy.get('.nav-link').should('contain', 'kotek1');
  });
});
