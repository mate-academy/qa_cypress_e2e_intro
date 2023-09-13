/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('should provide an ability to log in', () => {
    const email = 'naxu@mailinator.com';
    const password = 'Pa$$word123';

    cy.contains('a', 'Sign in').should('exist').click();

    cy.get('h1').should('contain.text', 'Sign In');

    cy.contains('Sign in').click();

    cy.get('h1').should('contain.text', 'Sign In');

    cy.get('[placeholder=Email]').type(email);

    cy.get('[placeholder=Password]').type(password);

    cy.get('.btn').click();

    cy.get('nav').contains('officiado222').should('exist');
  });
});
