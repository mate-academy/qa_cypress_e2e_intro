/// <reference types="cypress" />

describe('Sign In page', () => {
  it('successfull sign in', () => {
    cy.visit('https://react-redux.realworld.io/#/login');
    cy.get('[placeholder="Email"]').type('my@gmail.com');
    cy.get('[placeholder="Password"]').type('Qwerty123');
    cy.get('[type="submit"]').click();
    cy.get('.navbar .nav-item').last().should('contain.text', 'tratatra');
  });
});
