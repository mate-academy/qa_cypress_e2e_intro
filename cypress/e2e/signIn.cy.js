/// <reference types="cypress" />

describe('Site page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  cy.get('h1').should('contain.text', 'Sign In');

  cy.contains('Sign in').click();

  cy.get('h1').should('contain.text', 'Sign In');

  it('should fill in email and password fields with valid data', () => {
    cy.get('[placeholder=Email]')
      .type('oleksadowbush@gmail.com');

    cy.get('[placeholder=Password]')
      .type('Oleksa19*');

    it('should click on [Sign in] button ', () => {
      cy.get('.btn').click();
    });

    cy.get('nav').contains('OleksaD19').should('exist');
  });
});
