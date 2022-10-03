/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe ('my second test [Nataliia Solotva]', () => {

  before (() => {
    cy.visit('https://react-redux.realworld.io/')
    cy.contains('Sign up')
    .click()
  });
 
  it('should', () => {
    const user = generateUser();

    cy.get(':nth-child(1) > .form-control')
    .type(user.username);
    cy.get(':nth-child(2) > .form-control')
    .type(user.email);
    cy.get(':nth-child(3) > .form-control')
    .type(user.password);
    cy.get('.btn')
    .click();
    cy.get(':nth-child(4) > .nav-link')
    .should('contain', user.username)
  });
});


