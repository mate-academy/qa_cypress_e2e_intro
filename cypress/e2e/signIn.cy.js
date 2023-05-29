/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.contains('.nav-link', 'Sign in')
    .click();
    cy.get('[placeholder="Email"]').type('irina@test.qa');
    cy.get('[placeholder="Password"]').type('qwerty');
    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('have.text', 'testuseririna');
  });
});

