/// <reference types="cypress"/>

describe('Sign In', () => {
  it('should provide the ability to accept valid Data', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.contains('Sign in').click();
    cy.get(':nth-child(1) > .form-control')
      .type('wesaf@wesaf.com');
    cy.get(':nth-child(2) > .form-control')
      .type('wesaf');
    cy.get('.btn')
      .click();
    cy.get('.navbar')
      .should('contain.text', 'wesaf')
  });
})
