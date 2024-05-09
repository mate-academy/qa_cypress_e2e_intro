/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('should have main parts', () => {
    cy.get('.logo-font').should('contain.text', 'conduit');

    cy.contains('a', 'Global Feed')
      .should('exist');

    cy.contains('.sidebar', 'Popular Tags')
      .should('exist');
  });

  it('should provide an ability to log in', () => {
    cy.contains('a', 'Sign in')
      .should('exist').click();

    cy.url().should('include', '/login');

    cy.get('h1').should('contain.text', 'Sign In');
    cy.get('[placeholder=Email]').type('maksimov20@gmail.com');

    cy.get('[placeholder=Password]').type('Maksimova1!');

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', 'Suzy');
  });
});
