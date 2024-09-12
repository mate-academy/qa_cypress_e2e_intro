/// <reference types="cypress" />

Cypress.on('uncaught:exception', (_err, runnable) => {
  return false;
});

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(2) > .nav-link')
      .click();
    cy.get(':nth-child(1) > .form-control')
      .type('yatut.coffee+1@gmail.com');
    cy.get(':nth-child(2) > .form-control')
      .type('P@s$w0rd');
    cy.get('.btn')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'YaA');
  });
});
