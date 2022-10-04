/// <reference types="cypress" />

describe("Sign In page", () => {
  beforeEach(() => {
    cy.visit("/#/login");
    //cy.contains("Sign in").click();
  });
  it("Should allow to log in with valid data", () => {
    cy.get("h1").should("contain.text", "Sign In");
    cy.url().should("include", "/login");
    cy.get(":nth-child(1) > .form-control").type("taras@gmail.com");
    cy.get(":nth-child(2) > .form-control").type("taras");
    cy.contains(".btn", "Sign in").click();
    cy.get(":nth-child(4) > .nav-link").should("contain.text", "taras123");
  });
});
