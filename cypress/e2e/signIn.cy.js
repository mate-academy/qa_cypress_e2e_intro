/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit("https://react-redux.realworld.io/#/?_k=t7rjy8")
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('[placeholder="Email"]').type("cypress@qa.team")
    cy.get('[placeholder="Password"]').type("Pa$$w0rd!")
    cy.get('.btn').click()
    cy.get ('.navbar').should('contain.text', 'cypressTeste2e')
  });
});
