/// <reference types="cypress" />

describe("Sign In page", () => {
  it("should provide an ability to log in", () => {
    cy.visit("https://react-redux.realworld.io/#/login?_k=mth9lr");

    cy.get('input[type="email"]').type("hania@gmail.com");
    cy.get('input[type="password"]').type("hania");

    cy.get('button[type="submit"]').click();

    cy.get("nav").contains("hania").should("be.visible");
  });
});
