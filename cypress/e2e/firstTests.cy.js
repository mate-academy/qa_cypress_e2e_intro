/// <reference types="cypress" />

describe('User should be able', () => {
  before(() => {
  cy.visit('https://react-redux.realworld.io');
  });
  it('to Sign in with valid data', () => {
    cy.get(':nth-child(2) > .nav-link')
    .click();
    cy.get(':nth-child(1) > .form-control')
    .type('askq@mail.com');
    cy.get(':nth-child(2) > .form-control')
    .type('1834cd3e');
    cy.get('.btn')
    .click();
    cy.get(':nth-child(4) > .nav-link')
    .should('contain', 'funuser');
  });
});
