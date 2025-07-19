/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/user/login');
  });

  it('should provide an ability to log in', () => {
    cy.get('[type="email"]').type('user@name.com');
    cy.get('[type="password"]').type('111111');
    cy.get('[type="submit"]').click();

    cy.location('pathname').should('eq', '/');
    cy.contains('.nav-link', 'username');
  });

  it('should provide validation for inputs', () => {
    cy.get('[type="email"]').type('user@name.com');
    cy.get('[type="password"]').type('11111');
    cy.get('[type="submit"]').click();
    cy.get('.error-messages').should('exist');
  });
});
