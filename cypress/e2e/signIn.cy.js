/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/#/login');

    cy.get('.auth-page').should('be.visible');

    cy.get('input[placeholder="Email"]').type('your@email.com');

    cy.get('input[placeholder="Password"]').type('yourPassword');

    cy.get('button[type="submit"]').click();

    cy.get('.navbar').should('contain', 'yourUsername');
  });
});
