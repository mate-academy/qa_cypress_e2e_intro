
/// <reference types="cypress" />

describe('Sign In', () => {
  it('should provide ability to sign in', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get('h1.text-xs-center').should('contain', 'Sign In');
    cy.get(':nth-child(1) > .form-control').type('inna.oleksin@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('InnaInna');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain', 'inna');
  });
});