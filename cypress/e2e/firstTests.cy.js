/// <reference types="cypress" />

describe('User should be able', () => {
  before (() => (
    cy.visit('https://react-redux.realworld.io')
  ));
  it('to login with valid data', () => {
    cy.contains('Sign in')
    .click();
    cy.get(':nth-child(1) > .form-control')
    .type('username777@qa.team');
    cy.get(':nth-child(2) > .form-control')
    .type('123456');
    cy.get('.btn')
    .click();
    cy.get(':nth-child(4) > .nav-link')
    .should('contain', 'username777');
  });
});
