/// <reference types="cypress" />

const email = 'olya6723510@gmail.com';
const password = 'olya6723510';
const username = 'olyavidzi';

describe('Sign in flow', () => {
  it('should log in with valid credentials and show username in header', () => {
    cy.visit('https://conduit.mate.academy/');

    cy.contains('Sign in').click();
    cy.get('[placeholder=Email]').type(email);
    cy.get('[placeholder=Password]').type(password);
    cy.get('button[type=submit]').click();

    cy.get('a.nav-link').should('contain.text', username);
  });
});
