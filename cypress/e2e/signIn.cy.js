/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/user/login');
    cy.get('input[type="email"]').type('sofi@gmail.com');
    cy.get('input[type="password"]').type('Sofi06!');
    cy.get('button[type="submit"]').click();
    cy.get('.nav-link').should('contain', 'sofi');
  });
});
