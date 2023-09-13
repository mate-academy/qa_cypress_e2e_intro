/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#login');

    cy.get('input[type="email"]').type('ruviw@mailinator.com');

    cy.get('input[type="password"]').type('Pa$$w0rd!');

    cy.get('.btn').click();

    cy.get('nav').should('contain', 'Eaque65575');
  });
});
