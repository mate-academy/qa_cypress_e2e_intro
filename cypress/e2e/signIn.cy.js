/// <reference types="cypress" />

// const { should } = require("chai");

describe('Sign In page', () => {
  
  beforeEach (() => {
    cy.visit("/")
  });
  
  it('should provide an ability to log in with valid credentials', () => {
    
    
    cy.get("h1")
      .should("contain.text", "conduit")

    cy.contains("Sign in")
      .click()

    cy.url()
      .should("include", "/login")

    cy.get("h1")
      .should("contain", "Sign In")

    cy.get('[placeholder="Email"]')
      .type("NikitaHello@qa.com")

    cy.get('[placeholder="Password"]')
      .type("Password1234567890!")

    cy.contains('.btn', 'Sign in')
      .click()

    cy.get(':nth-child(4) > .nav-link')
      .should("contain.text", "NikitaHello")
    
  });
});
