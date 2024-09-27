/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login');
  });
  it('should provide an ability to log in', () => {
    cy.url().should('include', '/login');
    cy.get('h1.text-xs-center').should('contain.text', 'Sign In');
    cy.get(':nth-child(1) > .form-control').type('username987@mail.com');
    cy.get(':nth-child(2) > .form-control').type('Password');
    cy.contains('.btn', 'Sign in').click();
    cy.get(':nth-child(4) > .nav-link').should('contain.text', 'username987');
  });
});
