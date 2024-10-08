/// <reference types="cypress" />

describe("Sign In page", () => {
 it("should provide an ability to log in", () => {
  const testEmail = "test_user_1@gmail.com";
  const testPassword = "Test1234";
  const testUserName = "test_user_1";

  cy
   .visit("https://react-redux.realworld.io")
   .contains("a", "Sign in")
   .should("exist")
   .click();

  cy.get("[placeholder=Email]").type(testEmail);

  cy.get("[placeholder=Password]").type(testPassword);

  cy.get(".btn").click();

  cy.contains(testUserName).should("exist");
 });
});
