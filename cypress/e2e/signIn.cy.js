/// <reference types="cypress" />
describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/user/login');
    cy.get('input[type="email"]').type(Cypress.env('EMAIL'));
    cy.get('input[type="password"]').type(Cypress.env('PASSWORD'));
    cy.get('button[type="submit"]').click();
    cy.get('.navbar').should('contain', 'miretta2');
  });
});
