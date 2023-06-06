/// <reference types="cypress" />

describe('Sign In page', () => {
  const user = 'user-test12345';
  const email = 'user-test12345@gmail.com';
  const password = 'user12345';

  it('should provide an ability to log in', () => {
    cy.visit('/');

    cy.contains('a', 'Sign in')
      .click();

    cy.url()
      .should('include', '/login');

    cy.get('h1')
      .should('contain.text', 'Sign In');

    cy.get('[placeholder="Email"]')
      .type(email);

    cy.get('[placeholder="Password"]')
      .type(password);

    cy.contains('button', 'Sign in')
      .click();

    cy.contains('.nav-link', user)
      .should('exist');
  });
});
