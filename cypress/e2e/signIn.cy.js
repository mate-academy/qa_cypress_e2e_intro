/// <reference types="cypress" />

const { createdUser } = require('../support/createdUser');

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');

    const { username, email, password } = createdUser();

    cy.contains('a', 'Sign in').should('exist').click();

    cy.contains('Sign in').click();

    cy.get('h1').should('contain.text', 'Sign In');

    cy.get('[placeholder=Email]').type(email);

    cy.get('[placeholder=Password]').type(password);

    cy.get('.btn').click();

    cy.get('nav').contains(username).should('exist');
  });
});
