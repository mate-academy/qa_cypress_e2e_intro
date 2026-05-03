/// <reference types="cypress" />

describe("Sign In page", () => {
  it("should provide an ability to log in", () => {
    cy.visit("https://conduit.mate.academy/#/login");
    cy.contains("a", "Sign in").click();
    cy.get('input[placeholder="Email"]').type("aakashsadhu@hotmail.com");
    cy.get('input[placeholder="Password"]').type("aakash1sadhu");

    cy.contains("button", "Sign in").click();

    cy.get(".navbar").contains("a", "aakashsadhu").should("be.visible");
  });
});
