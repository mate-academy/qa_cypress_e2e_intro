/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.contains('[href="#login"]', 'Sign in')
      .click();
    cy.get('[placeholder="Email"]')
      .type('matest@gmail.com');
    cy.get('[placeholder="Password"]')
      .type('matestmatest');
    cy.contains('[type="submit"]', 'Sign in')
      .click();
    cy.contains('[href="#@matest"]', 'matest');
  });
});
