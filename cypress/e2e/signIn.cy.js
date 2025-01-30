/// <reference types="cypress" />

describe('Sign In page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should provide an ability to log in', () => {
    const username = 'nataliia123';
    const email = 'testnataliia@gmail.com';
    const password = 'Test12345';
    cy.contains('a', 'Sign in').should('exist').click();
    cy.url().should('include', '/login');
    cy.get('h1').should('contain.text', 'Sign in');
    cy.get('[placeholder=Email]')
      .type(email);
    cy.get('[placeholder=Password]')
      .type(password);
    cy.contains('button', 'Sign in')
      .click();
    cy.get('.nav-link')
      .should('contain.text', username);
  });
});
