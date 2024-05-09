/// <reference types="cypress" />
const username = 'mian1111';
const email = `${username}@gmail.com`;
const password = 'password';

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/');
    cy.get(':nth-child(2) > .nav-link')
      .click();
    cy.get(':nth-child(1) > .form-control')
      .type(email);
    cy.get(':nth-child(2) > .form-control')
      .type(password);
    cy.get('.btn')
      .click();
    cy.get(':nth-child(4) > .nav-link')
      .should('contain', username);
  });
});
