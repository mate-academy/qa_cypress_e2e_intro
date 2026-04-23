/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/#/login');
    cy.get('input[placeholder="Email"]').type('your_email@example.com');
    cy.get('input[placeholder="Password"]').type('your_password');
    cy.get('button[type="submit"]').click();
    cy.get('.navbar').should('contain', 'your_username');
  });
});
