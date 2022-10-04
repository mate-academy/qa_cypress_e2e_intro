/// <reference types="cypress" />

describe('Sign in with valid credentials', () => {
  it('User is able to login with valid credentials', () => {
    cy.visit('https://react-redux.realworld.io/#/login');

    cy.get('[type="email"]')
      .type("Testing123@gmail.com");

    cy.get('[type="password"]')
      .type("Testing123");

    cy.get('.btn')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should("contain.text", "e12d123e12eqwe12ed13e1e");
  });
});
