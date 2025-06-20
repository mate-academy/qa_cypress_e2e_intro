/// <reference types="cypress" />

const fillInput = (selector, value) => {
  cy.get(selector).should("be.visible");
  cy.get(selector).clear();
  cy.get(selector).type(value);
  cy.get(selector).should("have.value", value);
};

describe("Sign In page", () => {
  beforeEach(() => {
    cy.visit("https://conduit.mate.academy/");
    cy.contains("a", "Sign in").click();
    cy.url().should("include", "/login");
  });

  it("should allow filling in the email input", () => {
    fillInput(`input[placeholder="Email"]`, "apple@gmail.com");
  });

  it("should allow filling in the password input", () => {
    fillInput(`input[placeholder="Password"]`, "12345678aa");
  });

  it("should log in to an existing account", () => {
    fillInput(`input[placeholder="Email"]`, "apple@gmail.com");
    fillInput(`input[placeholder="Password"]`, "12345678aa");

    cy.get(`button[type="submit"]`)
      .should("be.visible")
      .and("not.be.disabled")
      .click();

    cy.get("a.nav-link", { timeout: 5000 }).should(
      "contain.text",
      "mishanya234"
    );
  });
});
