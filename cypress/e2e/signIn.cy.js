/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/?_k=hjk3ew');
    cy.get(':nth-child(2) > .nav-link')
      .click();
    cy.get(':nth-child(1) > .form-control')
      .type('Azazin@gmail.com');
    cy.get(':nth-child(2) > .form-control')
      .type('Azazin123');
    cy.get('.btn')
      .click();
    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'Azazini');
  });
});
