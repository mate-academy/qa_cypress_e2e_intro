/// <reference types="cypress" />

describe('Conduit', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should perform authorization', () => {
    cy.contains('.nav-link', 'Sign in').click();
    cy.contains('.text-xs-center', 'Sign in');
    cy.get('[placeholder=Email]')
      .type('sanyaplaneta@ukr.net');
    cy.get('[placeholder=Password]')
      .type('1qaz2wsx');
    cy.contains('button', 'Sign in').click();
    cy.contains('a', 'user_alex');
    cy.url().should('include', 'conduit.mate.academy');
  });
});
