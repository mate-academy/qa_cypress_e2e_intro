// <reference types="cypress" />

describe('Sign In Flow (Stable for SPA)', () => {
  const email = 'arberzylyftari@gmail.com';
  const password = 'test123';
  const username = 'arberz';

  it('logs in successfully and shows username in the navigation', () => {
    cy.intercept('POST', '**/users/login').as('loginRequest');

    cy.visit('https://conduit.mate.academy/');

    cy.contains('Sign in').should('be.visible').click();

    cy.get('input[placeholder="Email"]').should('be.visible').type(email);
    cy.get('input[placeholder="Password"]').should('be.visible').type(password);

    cy.get('button').contains('Sign in').should('be.enabled').click();

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

    cy.get('nav', { timeout: 10000 }).contains(username).should('be.visible');
  });
});
