/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login');
  });
  it('should provide an ability to log in', () => {
    const username = 'eltest523';

    cy.get('[placeholder="Email"]')
      .type('eltest523@gmail.com');

    cy.get('[placeholder="Password"]')
      .type('eltest523');

    cy.get('.btn').click();

    cy.get('.navbar')
      .should('contain.text', `${username}`);
  });
});
