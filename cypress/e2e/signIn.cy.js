/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/');
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control')
      .type('rydik@meta.ua');
    cy.get(':nth-child(2) > .form-control')
      .type('123789');
    cy.get('.btn').click();
    cy.get('.navbar').contains('Rydikk')
      .should('exist');
  });
});
