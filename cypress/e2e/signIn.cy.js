/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const email = 'qa_user_001@gmail.com';
    const pw = 'qa_user_001';
    const username = 'qa_user_001';

    cy.visit('https://conduit.mate.academy/user/login');

    cy.intercept('POST', '**/users/login').as('login');

    cy.get('h1').should('contain.text', 'Sign in');
    cy.get('[placeholder=Email]').type(email);
    cy.get('[placeholder=Password]').type(pw);

    cy.get('.btn').click();

    cy.wait('@login').its('response.statusCode').should('eq', 200);

    cy.contains('a.nav-link', username, { timeout: 10000 })
      .should('be.visible');
  });
});
