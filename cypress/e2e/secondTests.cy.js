/// <reference types="cypress" />
const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  it('should allow to register with valid data', () => {
    const {email, username, password} = generateUser();
    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(3) > .nav-link')
    .click();

    cy.get(':nth-child(1) > .form-control')
    .type(username);

    cy.get(':nth-child(2) > .form-control')
    .type(email);

    cy.get(':nth-child(3) > .form-control')
    .type(password);

    cy.get('.btn')
    .click();

    cy.get(':nth-child(4) > .nav-link')
    .should('contain', username);
    
  });
});
