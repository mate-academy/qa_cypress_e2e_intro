/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    
    cy.visit("https://react-redux.realworld.io")

    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('[placeholder="Email"]').type("anastasiia_stelmakh@ukr.net")
    cy.get('[placeholder="Password"]').type("anastasiia_stelmakh")
    cy.get('.btn').click()
    cy.get(':nth-child(4) > .nav-link');
  });
});
