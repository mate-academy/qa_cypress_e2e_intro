/// <reference types="cypress" />
describe('Basic level', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('Sign In with valid data', () => {
    cy.contains('Sign in')
    .click();

    cy.get(':nth-child(1) > .form-control')
    .type('bla@mail.com');
    cy.get(':nth-child(2) > .form-control')
    .type('123Qwe!');

    cy.get('.btn')
    .click();

    cy.get(':nth-child(4) > .nav-link')
    .contains('bla123')
  });
});