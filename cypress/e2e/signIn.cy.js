/* eslint-disable */

/// <reference types='cypress' />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit("/login"); // 🔹 Navigate to login page
  });

  it("should provide an ability to log in", () => {
    cy.get('input[name="email"]').type("[email protected]"); // 🔹 Enter email
    cy.get('input[name="password"]').type("securepassword123"); // 🔹 Enter password
    cy.get('button[type="submit"]').click(); // 🔹 Click login button

    // 🔹 Ensure user is redirected to dashboard or sees a success message
    cy.url().should("include", "/dashboard");
    cy.contains("Welcome, TestUser").should("be.visible");
  });

  it("should show an error for invalid credentials", () => {
    cy.get('input[name="email"]').type("[email protected]");
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();

    cy.contains('Invalid email or password').should('be.visible');
  });
});
