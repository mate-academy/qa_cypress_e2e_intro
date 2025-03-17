/// <reference types="cypress" />

describe("Sign In page", () => {
  beforeEach(() => {
    cy.visit("https://conduit.mate.academy/user/login");
  });
  it("should provide an ability to log in", () => {
    const email = "bla@gmail.com";
    const password = "BlaBla@007";
    const userName = "maria";

    cy.request({
      method: "POST",
      url: "https://conduit.mate.academy/api/users/login",
      body: {
        user: {
          email: email,
          password: password,
        },
      },
    });
    cy.get("h1").should("contain.text", "Sign in");

    cy.get("[placeholder=Email]").type(email);
    cy.get("[placeholder=Password]").type(password);

    cy.get(".btn").click();

    cy.get(".nav-link").should("contain.text", userName);
  });
});
