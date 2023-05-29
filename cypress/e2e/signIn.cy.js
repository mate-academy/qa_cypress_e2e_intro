/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {

    const email = 'vladvek79@gmail.com';
    const password = '123456Vlad';

    cy.visit('https://react-redux.realworld.io');

    cy.contains('a', 'Sign in')
    .should('exist')
    .click();

    cy.url()
    .should('include', '/login');

    cy.get('[placeholder="Email"]')
    .type(email);

    cy.get('[placeholder="Password"]')
    .type(password);

    cy.contains('.btn', 'Sign in')
    .click();

    cy.contains('a', 'V2')
    .should('exist')
  });
});
