/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit("https://react-redux.realworld.io");
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get('[placeholder="Email"]').type("serhioTest@gmail.com");
    cy.get('[placeholder="Password"]').type("12345Qq!");
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('have.text','serhioTest');
  });
});
