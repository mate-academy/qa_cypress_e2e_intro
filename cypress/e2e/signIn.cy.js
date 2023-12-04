/// <reference types="Cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.get('div.container a').contains('Sign in').click();
    cy.url().should('include', '#/login');
    cy.get('[placeholder="Email"]').type('exampleuser11@mail.com');
    cy.get('[placeholder="Password"]').type('12345');
    cy.get('button').should('contain.text', 'Sign in').click();
    cy.get('.navbar a').should('contain.text', 'exampleuser11');
  });
});
