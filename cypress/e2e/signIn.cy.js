/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.contains('Sign in').click();

    cy.get('h1').should('contain.text', 'Sign In');

    cy.get('[placeholder="Email"]').type('dimaqajul23@gmail.com');

    cy.get('[placeholder="Password"]').type('12345678');

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain.text', 'dimaqajul23');
  });
});
