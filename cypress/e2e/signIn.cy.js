/// <reference types="cypress" />

describe('Sign In page', () => {
  const email = 'annanicky90@gmail.com';
  const password = '2610A141923';
  const username = 'annya';

  it('logs in successfully and shows username in the navigation', () => {
    cy.visit('https://conduit.mate.academy/');

    cy.contains('Sign in').should('be.visible').click();

    cy.contains('Sign in').should('be.visible');

    cy.get('input[placeholder="Email"]').should('be.visible').type(email);
    cy.get('input[placeholder="Password"]').should('be.visible').type(password);

    cy.get('button').contains('Sign in').should('be.enabled').click();

    cy.get('nav').contains(username).should('be.visible');
  });
});
