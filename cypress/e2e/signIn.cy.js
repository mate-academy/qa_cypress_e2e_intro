/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should allow a user to log in with valid credentials', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });

  it('should show an error message for invalid login', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('invalid@example.com');
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();
    cy.get('.error-message').should('be.visible')
      .and('contain', 'Invalid credentials');
  });
});
