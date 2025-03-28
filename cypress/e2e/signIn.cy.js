/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/#/login');
  });

  it('should provide an ability to log in', () => {
    cy.get('h1')
      .should('contain.text', 'Sign In');

    cy.url().should('include', '/login');

    cy.get('[placeholder=Email]')
      .type('olena@gmail.com');

    cy.get('[placeholder=Password]')
      .type('5600029');

    cy.get('.btn').click();

    cy.get('.nav-link')
      .should('contain.text', 'OlenaTest');
  });
});
