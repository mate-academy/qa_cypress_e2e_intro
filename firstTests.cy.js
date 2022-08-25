/// <reference types="cypress" />

describe('My first tests', () => {
  it('should', () => {
    cy.visit('https://react-redux.realworld.io')
    
    cy.contains('Sign in')
      .click ()

    cy.url()
      .should('include', '/login')
      cy.get(':nth-child(1) > .form-control')
      .type('superemail8@email.ua')
      cy.get(':nth-child(2) > .form-control')
      .type('Superpassword8')
      cy.get('.btn')
      .click()
      cy.get(':nth-child(4) > .nav-link')
      .type('superusername8')
  });
});