/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'testuser123';
  const email = 'testuser123@gmail.com';
  const password = 'testuser123password';

  beforeEach(() => {
    cy.visit('/user/login');
  });

  it('should exist', () => {
    cy.url().should('include', 'login');
  });

  it('should log in successfully', () => {
    cy.get('[type="email"]').type(email);
    cy.get('[type="password"]').type(password);
    cy.get('[type="submit"]').click();
    cy.get(`[href="/profile/${username}"]`).should('contain.text', username);
  });
});
