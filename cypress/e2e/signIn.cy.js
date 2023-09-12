/// <reference types="cypress" />

describe('Site page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('should open main page', () => {
    cy.get('h1').should('contain.text', 'conduit');
  });

  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=y0qwae');
  });

  it('should click on [Sign in] button', () => {
    cy.contains('a', 'Sign in').should('exist').click();
    cy.get('h1').should('contain.text', 'Sign In');
  });

  it('should fill in email and password fields with valid data', () => {
    cy.get('[placeholder=Email]')
      .type('oleksadowbush@gmail.com');

    cy.get('[placeholder=Password]')
      .type('Oleksa19*');

    it('should click on [Sign in] button', () => {
      cy.contains('a', 'Sign in').should('exist').click();
      cy.get('h1').should('contain.text', 'Sign In');
    });
    cy.get('nav').contains('OleksaD19').should('exist');
  });
});
