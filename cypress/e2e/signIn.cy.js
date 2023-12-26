/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
  cy.visit('https://react-redux.realworld.io/#/?_k=ovbp08');
    cy.get(':nth-child(2) > .nav-link')
    .click();
    cy.get(':nth-child(1) > .form-control')
    .type('olga.belmega@gmail.com');
    cy.get(':nth-child(2) > .form-control')
    .type('poland-23QA!');
    cy.get('.btn')
    .click();
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
      cy.get('.navbar')
      .should('contain', 'pops');
      });
});
});

