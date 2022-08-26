/// <reference types="cypress" />

describe('Basic_level', () => {
  beforeEach( () => {
    cy.visit('https://react-redux.realworld.io')
  });

  it('Success Sign in', () => {
    cy.get(':nth-child(2) > .nav-link')
        .click()

    cy.get(':nth-child(1) > .form-control')
        .type('usermate@gmail.com')

    cy.get(':nth-child(2) > .form-control')
        .type('rrrr676')

    cy.get('.btn')
        .click()
        

    cy.get(':nth-child(4) > .nav-link')
        .should('contain.text', 'rrrr789')
  });
});
