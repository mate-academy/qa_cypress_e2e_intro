const { generateUser } = require("../support/generate");

describe("Sign Up Positive", () => {
  beforeEach(() => {
    cy.visit("/#/register");
  });

  it("should register a new user with valid data", () => {
    const user = generateUser();

    cy.get('[placeholder="Username"]').type(user.username);

    cy.get('[placeholder="Email"]').type(user.email);

    cy.get('[placeholder="Password"]').type(user.password);

    cy.contains(".btn", "Sign in").click();

    cy.get(":nth-child(4) > .nav-link").should("contain", user.username);
  });
});
