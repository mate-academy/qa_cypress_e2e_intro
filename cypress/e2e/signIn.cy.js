/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/#/login');

    cy.get('input[type="email"]')
      .type('your@email.com');

    cy.get('input[type="password"]')
      .type('yourPassword');

    cy.get('button[type="submit"]')
      .click();

    cy.get('.navbar')
      .should('contain', 'yourUsername');
  });
});
