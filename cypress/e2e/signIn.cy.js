/// <reference types="cypress" />

describe("Sign In page", () => {
  it("should provide an ability to log in", () => {
    cy.visit("https://react-redux.realworld.io/#/login");
    cy.get(":nth-child(1) > .form-control").type("oleg123456@gmail.com");
    cy.get(":nth-child(2) > .form-control").type("12345");
    cy.get(".btn").click();
    cy.get(":nth-child(4) > .nav-link").should("contain", "oleg123456");
  });
});
