/// <reference types="cypress" />

describe('Sign In page', () => {
  const validEmail = 'test@example.com';
  const validPassword = 'password123';
  const invalidEmail = 'invalid@example.com';
  const invalidPassword = 'wrongpassword';

  beforeEach(() => {
    cy.request('POST', '/api/createUser', {
      email: validEmail,
      password: validPassword
    });
  });

  it('should allow a user to log in with valid credentials', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type(validEmail);
    cy.get('input[name="password"]').type(validPassword);
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');

    // Check for an element that confirms a successful login
    cy.get('.welcome-message').should('be.visible').and('contain', 'Welcome');
  });

  it('should show an error message for invalid login', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type(invalidEmail);
    cy.get('input[name="password"]').type(invalidPassword);
    cy.get('button[type="submit"]').click();

    // Check for the visibility of any error message
    cy.get('.error-message').should('be.visible');
  });
});
