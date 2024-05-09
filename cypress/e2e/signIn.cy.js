/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login');
    cy.get('input[type="email"]').type('johndoe2@gmail.com');
    cy.get('input[type="password"]').type('Test1234');
    cy.contains('button', 'Sign in').click();
    cy.get(':nth-child(4) > .nav-link');
  });
});
