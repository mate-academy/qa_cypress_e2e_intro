/// <reference types="cypress" />

describe('Sign In page', () => {
  before(() => {
    cy.visit("https://react-redux.realworld.io/#/login");
  });

  it('should provide an ability to log in', () => {
    cy.get('[placeholder="Email"]')
      .type('uri333@test.io');
    
    cy.get('[placeholder="Password"]')
      .type('Qazwsx123!');
    
    cy.contains('.btn', 'Sign in')
      .click();
    
    cy.get(":nth-child(4) > .nav-link")
      .should("contain.text", "uri333");
  });
});
