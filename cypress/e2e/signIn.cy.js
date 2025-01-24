/// <reference types="cypress" />

describe('Sign In page', () => {
  const email = 'indiggoo228@gmail.com';
  const password = '1234pass';

  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/');
    cy.contains('a', 'Sign in').click();
    cy.get('[placeholder=Email]').type(email);
    cy.get('[placeholder=Password]').type(password);
    cy.contains('button', 'Sign in').click();
    cy.contains('a', 'xeomzi');
  });
});
