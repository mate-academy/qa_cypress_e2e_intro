/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    
    cy.visit("https://react-redux.realworld.io")
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('[placeholder="Email"]').type("kristina.kuprin@gmail.com")
    cy.get('[placeholder="Password"]').type("11031990")
    cy.contains('.btn', 'Sign in').click()
    cy.get('nav')
    .should('contain.text', 'test1103')
  });
});
