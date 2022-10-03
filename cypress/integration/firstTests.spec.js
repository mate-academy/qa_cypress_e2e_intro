/// <reference types="cypress" />

describe('My first tests', () => {
  it('should', () => {
    cy.visit('https://react-redux.realworld.io')
  });

  it('to Sign In with valid data', () => {
    cy.get(':nth-child(2) > .nav-link')
    .click();

    cy.get(':nth-child(1) > .form-control')
    .type('test@qa.team');

    cy.get(':nth-child(2) > .form-control')
    .type('1234Qwer!');

    cy.get('.btn')
    .click();

    cy.get(':nth-child(4) > .nav-link')
    .should('contain', '');
  })
});
