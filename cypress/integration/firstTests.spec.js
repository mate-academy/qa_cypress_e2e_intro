/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Advanced level', () => {
  it('Sign up with faker', () => {
    const user = generateUser();
    cy.visit('https://react-redux.realworld.io');
    cy.get(':nth-child(3) > .nav-link')
     .click();
     cy.get(':nth-child(1) > .form-control')
     .type(user.username);
     cy.get(':nth-child(2) > .form-control')
     .type(user.email);
     cy.get(':nth-child(3) > .form-control')
     .type(user.password);
     cy.get('.btn')
     .click();
     cy.get(':nth-child(4) > .nav-link')
     .should('contain', user.username);
  });
});

describe('Basic level', () => {
  it('Sign in with valid date', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.get(':nth-child(2) > .nav-link')
     .click();
    cy.get(':nth-child(1) > .form-control')
     .type('qentin@gmail.com');
    cy.get(':nth-child(2) > .form-control')
     .type('151636Ann');
    cy.get('.btn')
     .click();
    cy.get(':nth-child(4) > .nav-link')
    .should('contain', 'qentin');
  });
});