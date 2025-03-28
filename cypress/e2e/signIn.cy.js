/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const user = 'zx315';
  const email = 'zx315@mail.net';
  const password = 'pass123';

  it('should provide an ability to log in', () => {
    cy.get('.nav-link')
      .should('exist')
      .should('contain.text', 'Sign in');

    cy.contains('.nav-link', 'Sign in')
      .click();

    cy.url().should('include', '/login');
    cy.get('h1').should('contain.text', 'Sign in');

    cy.get('[placeholder=Email]')
      .type(email);

    cy.get('[placeholder=Password]')
      .type(password);

    cy.get('.btn-primary').click();

    cy.get('.nav-link')
      .should('exist')
      .should('contain.text', user);
  });
});
