/// <reference types="cypress" />

// const { should } = require("chai");

describe('Sign In page', () => {
  it('should', () => {
    cy.visit('https://react-redux.realworld.io/#/login');
    cy.get(':nth-child(1) > .form-control').type('cherrycake@i.ua');
    cy.get(':nth-child(2) > .form-control').type('Qwer123!');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain', 'Cherrycake');
  });
});
