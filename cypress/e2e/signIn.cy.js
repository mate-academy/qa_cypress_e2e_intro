/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login');
    cy.get('input[type="email"]').type('babahelal@mailinator.com');
    cy.get('input[type="password"]').type('17129JGYT%^&#UTjgyt');
    cy.get('.btn').click();
    cy.get('nav[class="navbar navbar-light"]').should('contain', 'tyr5rytfhf');
  });
});
