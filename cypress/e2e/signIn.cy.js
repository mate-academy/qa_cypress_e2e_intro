/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(2) > .nav-link').click();

    cy.get('.navbar-brand').should('exist');
    cy.get(':nth-child(1) > .nav-link').should('exist');
    cy.get(':nth-child(2) > .nav-link').should('exist');
    cy.get(':nth-child(3) > .nav-link').should('exist');
    cy.get('h1.text-xs-center').should('exist');
    cy.get('p.text-xs-center > a').should('exist');
    cy.get(':nth-child(1) > .form-control').should('exist');
    cy.get(':nth-child(2) > .form-control').should('exist');
    cy.get('.btn').should('exist');

    cy.get('input[type="email"]').type('xokat@mailinator.com');
    cy.get('input[type="password"]').type('Olga2207!');
    cy.get('button[type="submit"]').click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'Voluptates mollitia');
  });
});
