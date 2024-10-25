/// <reference types="cypress" />

const logUsername = 'dsarqva';
const email = 'fdsfdas@gmail.com';
const password = 'dsadfgafsa';

describe('Sign In Test', () => {
  it('should sign in successfully', () => {
    cy.visit('https://conduit.mate.academy/');
    cy.get('[data-testid="sign-in-link"]').click();
    cy.get('[data-testid="username-input"]').type(logUsername);
    cy.get('[data-testid="email-input"]').type(email);
    cy.get('[data-testid="password-input"]').type(password);
    cy.get('[data-testid="submit-button"]').click();
    cy.url().should('include', '/home');
  });
});
