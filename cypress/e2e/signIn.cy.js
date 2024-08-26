/// <reference types="cypress" />

describe("Sign In page", () => {
  it("should provide an ability to log in", () => {
    cy.visit("https://conduit.mate.academy/user/login");

    cy.get("[type=email]").type("darinar@gmail.com");

    cy.get("input[type=password]").type("Dara1234");

    cy.get("[type=submit]").click();

    cy.get("a.nav-link").should("contain.text", "daradara");
  });
});
