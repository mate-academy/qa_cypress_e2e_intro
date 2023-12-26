/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login');
  });

  it('should provide an ability to log in', () => {
    cy.get('h1')
      .should('contain', 'Sign In');

    cy.get('[placeholder=Email]')
      .type('sttbd@test.ua');
    cy.get('[placeholder=Password]')
      .type('11');
    cy.get('button[type=submit]')
      .click();

    cy.get('a.nav-link[href="#@testerQA"]')
      .should('contain', 'testerQA');
  });
});
