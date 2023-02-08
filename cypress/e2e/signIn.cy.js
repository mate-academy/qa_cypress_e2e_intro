/// <reference types="cypress" />

describe('Sign In page', () => {
  const email = 'Kostenko@test.com';
  const password = 'password123';
  const userName = 'Kostenko';
  it('should provide an ability to log in', () => {
    cy.visit('/');
    cy.contains('.nav-link', 'Sign in').click();
    cy.get(`[placeholder = "Email"]`).type(email);
    cy.get(`[placeholder = "Password"]`).type(password);
    cy.contains('.btn', 'Sign in').click();
    cy.get(':nth-child(4) > .nav-link').should('contain', userName);
  });
});
