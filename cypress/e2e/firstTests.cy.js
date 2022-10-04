/// <reference types="cypress" />

describe('Sign in, First test', () => {
  it('should', () => {
    cy.visit('https://react-redux.realworld.io')
  });

  it('Sign in with valid data', () => {
    cy.get(':nth-child(2) > .nav-link')
    .click();

    cy.get(':nth-child(1) > .form-control')
    .type('loomloom@qa.team');

    cy.get(':nth-child(2) > .form-control')
    .type('1234Qwer!');

    cy.get('.btn')
    .click();

    cy.get(':nth-child(4) > .nav-link')
    .should('contain', '');
  });

});
