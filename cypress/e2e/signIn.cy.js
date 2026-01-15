/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://conduit.mate.academy/user/login');
  });

  it('should provide an ability to log in', () => {
    const email = 'test1234567@gmail.com';
    const pw = 'test';

    cy.get('h1').should('contain.text', 'Sign in');
    cy.get('[placeholder=Email]').type(email);
    cy.get('[placeholder=Password]').type(pw);

    cy.get('.btn').click();
    cy.get('nav :last-child').should('contain.text', 'test1234567');
  });
});
