/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/'); //URL in config.js

    cy.contains('Sign in').click();

    cy.get('input[type="email"]').type('bogdansvystun06@gmail.com');
    cy.get('input[type="password"]').type('under2533');

    cy.get('button[type="submit"]').click();

    cy.get('.nav-link').should('contain.text', 'magnum001');
  });
});
