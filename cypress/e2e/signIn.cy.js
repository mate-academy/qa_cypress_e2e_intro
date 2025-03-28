/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/');

    cy.contains('.nav-link', 'Sign in')
      .click();

    cy.contains('.text-xs-center', 'Sign In')
      .should('exist');

    cy.get('[type="email"]')
      .type('litoleksandr.api@gmail.com');

    cy.get('[type="password"]')
      .type('!Litlit1993');

    cy.contains('[type="submit"]', 'Sign in')
      .click();

    cy.contains('[href="#@JasterSem"]', 'JasterSem')
      .should('exist');
  });
});
