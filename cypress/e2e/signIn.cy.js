/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login');
  });
  it('should provide an ability to log in', () => {
    const userEmail = 'testciu@gmail.com';
    const userName = 'ciu_ciu';
    const userPassword = 'testciu';

    cy.get('[placeholder="Email"]')
      .type(userEmail);

    cy.get('[placeholder="Password"]')
      .type(userPassword);

    cy.contains('.btn', 'Sign in')
      .click();

    cy.get('.nav-link')
      .should('contain.text', userName);
  });
});
