/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login')
  });

  it('should provide an ability to log in', () => {
    cy.get('[placeholder="Email"]')
      .type('tester@team.qa')

    cy.get('[placeholder="Password"]')
      .type('Qwerty1234')

    cy.contains('.btn', 'Sign in')
      .click();

    cy.get('nav')
      .should('contain.text', 'tester1!');
  });
});
