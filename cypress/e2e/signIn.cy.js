/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login');
  });
  it('should provide an ability to log in', () => {
    const username = 'gunder111';

    cy.get('[placeholder="Email"]').type('gunder111@gmail.com');
    cy.get('[placeholder="Password"]').type('qwe1234');
    cy.get('.btn').click();
    cy.get('.navbar').should('contain.text', `${username}`);
  });
});
