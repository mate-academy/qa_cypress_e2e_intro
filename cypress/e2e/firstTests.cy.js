/// <reference types="cypress" />

describe('User shoul be able', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('to Sign in with valid credentials', () => {
    cy.get(':nth-child(2) > .nav-link')
      .click();

    cy.get(':nth-child(1) > .form-control')
      .type('alam@qa.team');

    cy.get(':nth-child(2) > .form-control')
      .type('Qwert!123');

    cy.get('.btn')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'alam');
  });
});
