/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {

    cy.visit ('https://react-redux.realworld.io/')
    cy.contains('Sign in').click()
    cy.get(':nth-child(1) > .form-control').type('qangelina1!@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('qangelina1!')
    cy.get('.btn').click()
    cy.contains('qangelina1!').should('be.visible')
  });
});
