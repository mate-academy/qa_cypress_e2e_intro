/// <reference types="cypress" />

describe("Sign In page", () => {
  const username = "iluxa123456@gmail.com";
  const password = "iluxa123456@gmail.com";
  const email = "iluxa123456@gmail.com";
  it("should provide an ability to log in", () => {
    cy.visit("https://react-redux.realworld.io/#/login?_k=t2h8oy");
    cy.get("[placeholder=Email]").type(email);
    cy.get("[placeholder=Password]").type(password);
    cy.contains("button", "Sign in").click();
    cy.contains("a", username).should("be.visible");
  });
});
