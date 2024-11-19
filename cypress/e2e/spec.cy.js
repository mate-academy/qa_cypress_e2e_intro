/// <reference types="cypress" />

describe('sign in', () => {
  it('should to sign in a user with valid credential data', () => {
    cy.visit('https://react-redux.realworld.io');

      cy.get(':nth-child(2) > .nav-link')
      .click();

      cy.get(':nth-child(1) > .form-control').type('q12341234@gmail.com');
      cy.get(':nth-child(2) > .form-control').type('q12341234');
      cy.get('.btn').click()

      cy.get(':nth-child(4) > .nav-link').should('contain', 'q12341234');
  })
})