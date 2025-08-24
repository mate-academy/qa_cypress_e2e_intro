/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/user/login');
    cy.get('input.form-control[type="email"]').type('s1@gm.com');
    cy.get('input.form-control[type="password"]').type('12345678sS');
    cy.get('button.btn[type="submit"]').click();
    cy.contains('a.nav-link', 'user123').should('be.visible');
  });
});
