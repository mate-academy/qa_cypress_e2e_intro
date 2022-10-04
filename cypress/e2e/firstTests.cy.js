/// <reference types="cypress" />

describe('User shoul be able', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io')
  });


  it('to Sign Up with valid data', () => {
    cy.get(':nth-child(2) > .nav-link')
    .click();

    cy.get(':nth-child(1) > .form-control')
    .type('koxuto@mailinator.com');

    cy.get(':nth-child(2) > .form-control')
    .type('testpassword123456');

    cy.get('.btn')
    .click();

    cy.get('.home-page');
  });
});