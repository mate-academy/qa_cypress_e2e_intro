/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/');
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control');
    cy.get('input[type="email"]').type('ivankaregalova@gmail.com');
    cy.get('input[type="password"]').type('111111');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link')
      .contains('.nav-link', 'ivanra1')
      .should('exist');
  });
});
