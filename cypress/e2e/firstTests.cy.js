/// <reference types="cypress" />

describe('Sign In', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=y9eq63')
  });

  it('with valid data', () => {
    cy.get(':nth-child(1) > .form-control')
    .type ('testo25@qa.team')

    cy.get(':nth-child(2) > .form-control')
    .type('qwerty')

    cy.get('.btn')
    .click()

    cy.get(':nth-child(4) > .nav-link')
    .should('contain', 'testo25');
  });
});
