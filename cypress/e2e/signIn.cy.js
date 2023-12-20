/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'test123Username456';
  const password = 'passTEST12345';
  const email = 'test123@mail321test.com';

  it('should provide an ability to log in', () => {
    cy.visit('/');
    cy.contains('a', 'Sign in').click();

    cy.get('h1').should('contain.text', 'Sign In');

    cy.get('input[placeholder=Email]').type(email);
    cy.get('input[placeholder=Password]').type(password);
    cy.get('button').contains('Sign in').click();

    cy.get('.navbar').get('.nav-link').contains(username);
  });
});
