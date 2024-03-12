/// <reference types="cypress" />

// const { should } = require("chai");

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login');
    cy.get(':nth-child(1) > .form-control')
      .type('tyhyjihup@mailinator.com');
    cy.get(':nth-child(2) > .form-control')
      .type('test1234');
    cy.get('.btn').click();
    cy.get('.navbar').last()
      .should('contain.text', 'Maiores');
  });
});
