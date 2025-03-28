/// <reference types="cypress" />

describe('Sign in page', () => {
  it('should sign in user with valid data', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(2) > .nav-link')
      .click()

      cy.get(':nth-child(1) > .form-control')
        .type('userName123@gmail.com')

      cy.get(':nth-child(2) > .form-control')
        .type('Qazwsx123/')

      cy.get('.btn')
        .click()

      cy.get('.navbar')
        .should('contain.text','Settings')

      cy.get('.navbar')
        .should('contain.text','qazwsx123qaz')
  });
});
