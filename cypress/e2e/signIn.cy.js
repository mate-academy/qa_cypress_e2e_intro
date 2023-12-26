/// <reference types="cypress" />

const { userData } = require('../support/userData');

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const { email, username, password } = userData();
    cy.visit('https://react-redux.realworld.io');
    cy.get(':nth-child(2) > .nav-link').click();

    cy.get(':nth-child(1) > .form-control').type(email);
    cy.get(':nth-child(2) > .form-control').type(password);
    cy.get('.btn').click();

    cy.get('.navbar').should('contain', username);
  });
});
