/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/login');

    cy.get('[data-cy="email"]')
      .type('your@email.com');

    cy.get('[data-cy="password"]')
      .type('yourPassword');

    cy.get('[data-cy="sign-in-button"]')
      .click();

    cy.get('[data-cy="header-username"]')
      .should('be.visible')
      .and('contain', 'yourUsername');
  });
});
