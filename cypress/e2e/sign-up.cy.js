const { generateUser } = require("../support/generate");

describe("Sign Up Positive", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  it("should register a new user with valid data", () => {
    const user = generateUser();

    cy.findByPlaceholder("Username").type(user.username);

    cy.findByPlaceholder("Email").type(user.email);

    cy.findByPlaceholder("Password").type(user.password);

    cy.contains(".btn", "Sign in").click();

    cy.get(`a.nav-link[href="#@${user.username}"]`)
   
  });
});
