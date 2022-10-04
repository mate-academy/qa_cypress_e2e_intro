/// <reference types="cypress" />

describe('My first tests', () => {
  it('should open Main Page', () => {
    cy.visit('https://react-redux.realworld.io')
  });

  it('Sign In with valid data', () => {
    cy.get(':nth-child(2) > .nav-link')
    .click();

    cy.get(':nth-child(1) > .form-control')
    .type('anna@qa.team');

    cy.get(':nth-child(2) > .form-control')
    .type('anna1234');

    cy.get('.btn')
    .click();

    cy.get(':nth-child(4) > .nav-link')
    .should('contain', 'anna1234');
  })
});

