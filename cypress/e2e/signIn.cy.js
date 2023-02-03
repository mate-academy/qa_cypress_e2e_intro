/// <reference types="cypress" />


describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login');

    cy.get('[placeholder="Email"]')
      .type('anastasiia.qwerty@gmail.com');

    cy.get('[placeholder="Password"]')
      .type('12345qwerty')

    cy.contains('.btn', 'Sign in')
      .click();

    cy.contains('.nav-link', 'Anastasiiaqwerty');
  });
});

