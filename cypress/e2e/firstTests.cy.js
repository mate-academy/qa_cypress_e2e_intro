/// <reference types="cypress" />
describe('My First Test', () => {
  it('Visit "Sign in" page', () => {
    cy.visit('https://react-redux.realworld.io')
    cy.get(':nth-child(2) > .nav-link')
      .click()

    cy.get(':nth-child(1) > .form-control')
      .type('yana@gmail.com')
      .should('have.value', 'yana@gmail.com')

    cy.get(':nth-child(2) > .form-control')
      .type('yana')
      .should('have.value', 'yana')

    cy.get('.btn')
      .click()

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'yana_test')
  });
});
