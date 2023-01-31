/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login');

    cy.get(':nth-child(1) > .form-control')
      .type('test333@test.com');
    
    cy.get(':nth-child(2) > .form-control')
      .type('test333');
    
    cy.contains('.btn', 'Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'Test333')
  });
});
