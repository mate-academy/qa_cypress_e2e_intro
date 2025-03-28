/// <reference types="cypress" />

describe("Sign In page", () => {
  const userName = "SitOut";
  const password = "Qwerty1234";
  const email = "SitOut@mailinator.com";
  beforeEach(() => {
    cy.visit("https://react-redux.realworld.io");
  });

  it("should provide an ability to log in", () => {
    cy.get(":nth-child(2) > .nav-link").click();
    cy.get(":nth-child(1) > .form-control").type(email);
    cy.get(":nth-child(2) > .form-control").type(password);
    cy.get(".btn").click();
    cy.get(":nth-child(4) > .nav-link").should("contain", userName);
  });
});
