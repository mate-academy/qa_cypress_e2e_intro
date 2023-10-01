/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const username = `TestUser1696167944880`;
    const email = `${username}@gmail.com`;
    const password = 'Testpassword';

    cy.visit('#/login');

    cy.contains('Sign In');

    cy.get('[placeholder=Email]').type(email);
    cy.get('[placeholder=Password]').type(password);
    cy.get('button').contains('Sign in').click();
    cy.get('.nav-link').should('contain.text', username);
  });
});
