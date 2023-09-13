/// <reference types="cypress" />

describe('Site page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=lrfhka');
  });

  it('should open "Sign in" page', () => {
    cy.get('h1').should('contain.text', 'Sign In');
  });

  it('should click on "Sign in" link in the navigation', () => {
    cy.contains('a', 'Sign in').should('exist').click();
    cy.get('h1').should('contain.text', 'Sign In');
  });

  it('should fill in email and password fields with valid data', () => {
    cy.get('[placeholder=Email]')
      .type('oleksadowbush@gmail.com');

    cy.get('[placeholder=Password]')
      .type('Oleksa19*');

    it('should click on "Sign in" link ', () => {
      cy.contains('a', 'Sign in').should('exist').click();
      cy.get('h1').should('contain.text', 'Sign In');
    });
    cy.get('nav').contains('OleksaD19').should('exist');
  });
});
