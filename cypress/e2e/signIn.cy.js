/// <reference types="cypress" />

describe("Sign In page", () => {
  it("should provide an ability to log in", () => {
    cy.visit("/login");

    const email = "dolok53502@cartep.com";
    const password = "123456";

    cy.get("h1").should("contain.text", "Sign In");

    cy.get("[type=email]").type(email);
    cy.get("[type=password]").type(password);
    cy.get("[type=submit]").click();

    cy.get(".nav-link").should("contain.text", "dolok53502@cartep.com");
  });
});
