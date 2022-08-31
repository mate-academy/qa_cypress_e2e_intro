/// <reference types="cypress" />

describe("Sign In Positive", () => {
  it("Should allow a registered user to sing in with valid data", () => {
    cy.visit("/login");

    cy.findByPlaceholder("Email").type("lucia316@gmail.com");

    cy.findByPlaceholder("Password").type("trinity20");

    cy.contains(".btn", "Sign in").click();

    cy.get(":nth-child(4) > .nav-link").should("contain.text", "Lucia");

  });
});
