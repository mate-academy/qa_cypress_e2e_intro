/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/');
    cy.contains('.nav-link', 'Sign in')
      .should('exist').click();
    cy.url().should('include', '/login');
    cy.get('h1').should('contain.text', 'Sign in');
    cy.get(':nth-child(1) > .form-control').type('oladik05@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('12345678');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').click();
    cy.get('h4').should('contain.text', 'vladfil');
  });
});
