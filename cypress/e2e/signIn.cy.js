/// <reference types="cypress" />

describe('Sign In page', () => {

  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io')
  });

  it('should provide an ability to log in', () => {

    cy.contains('.nav-link', 'Sign in')
      .click();

    cy.get('[placeholder="Email"]')
      .type('testmail01@ukr.net');

    cy.get('[placeholder="Password"]')
      .type('testpass01');

    cy.contains('.btn', 'Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'sergio01');
  });
});
