/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/');
  });

  it('should provide an ability to log in', () => {
    const email = 'email-12-34@gmail.com';
    const password = 'pass-Word-2211-23323';

    cy.contains('a', 'Sign in')
      .should('exist').click();

    cy.url().should('include', '/login');
    cy.get('h1').should('contain.text', 'Sign In');

    cy.get('[placeholder=Email]')
      .type(email);

    cy.get('[placeholder=Password]')
      .type(password);

    cy.get('.btn').click();

    cy.contains('.nav-link', 'Volodymyr K')
      .should('exist');
  });
});
