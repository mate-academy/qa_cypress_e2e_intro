/// <reference types="cypress" />

describe('Sign In test', () => {
  it('should open Conduit page', () => {
    cy.visit('https://react-redux.realworld.io')
      .get('h1')
      .should('contain.text', 'conduit');

    cy.contains('Sign in')
      .click();
    
  });
  it('should allow to login', () => {
    cy.get(':nth-child(1) > .form-control')
      .type('banderolka123@test.com')

    cy.get(':nth-child(2) > .form-control')
      .type('playmaker68');

    cy.contains('.btn', 'Sign in')
      .click();
  });
  
  it('should contain username in the header', () => {
    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'banderolka123')
  });
});
