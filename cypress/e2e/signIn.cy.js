/// <reference types="cypress" />

describe("Sign In page", () => {
  it("should provide an ability to log in", () => {
    cy.visit("https://conduit.mate.academy/user/login");

    cy.registerNewUser().then(({ username, email, password }) => {
      cy.get("h1").should("contain.text", "Sign in");

      cy.findByPlaceholder("Email").type(email);
      cy.findByPlaceholder("Password").type(password);

      cy.get(".btn").click();

      cy.get(".nav-link").should("contain.text", username);
    });
  });
});
