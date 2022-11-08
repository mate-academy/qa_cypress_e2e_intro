/// <reference types="cypress" />
const { generateUser } = require('../support/generate');

describe('User should be able', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('to Sign Up with faker', () => {
    const user = generateUser();
    
    cy.contains('Sign up')
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
      .contains(user.username);

  });
});
