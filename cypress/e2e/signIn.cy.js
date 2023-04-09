/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit("https://conduit.mate.academy/")
    cy.get(':nth-child(2) > .nav-link')
    .click()
    cy.get('[placeholder="Email"]')
    .type("anastasiia_stelmakh@ukr.net")
    cy.get('[placeholder="Password"]')
    .type("Anastasiia_Stelmakh1")
    cy.get('.btn')
    .click()

  });
});
