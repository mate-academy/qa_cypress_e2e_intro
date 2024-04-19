/// <reference types="cypress" />
beforeEach(() => {
  cy.visit(`https://react-redux.realworld.io`);
});
describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.get('.nav-link').contains('Sign in').click();
    cy.get('input[type="email"]').type('poczta123@wp.pl');
    cy.get('input[type="password"]').type('Test123');
    cy.get('button[type="submit"]').click();
    cy.get('.nav-link').contains('steiniak');
  });
});
