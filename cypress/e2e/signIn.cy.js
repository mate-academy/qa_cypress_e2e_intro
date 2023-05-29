/// <reference types="cypress" />

const { generateUser } = require("../support/generate");

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');
    const {username, email, password} = generateUser();

    //sign up
    cy.get(':nth-child(3) > .nav-link')
      .click();
      
    cy.get(':nth-child(1) > .form-control')
      .type(username)

    cy.get(':nth-child(2) > .form-control')
      .type(email)

    cy.get(':nth-child(3) > .form-control')
      .type(password);

    cy.contains('.btn', 'Sign in')
      .click();  // this is not correct, because the [Sign up] button on this page doesn't exists
    cy.wait(600);

    //logout
    cy.contains('.nav-link', 'Settings')
      .click();

    cy.get('.btn-outline-danger')
      .click();

    //sign in
    cy.get(':nth-child(2) > .nav-link')
      .click();

    cy.get(':nth-child(1) > .form-control')
      .type(email);

    cy.get(':nth-child(2) > .form-control')
      .type(password);

    cy.contains('.btn', 'Sign in')
      .click();
      
    cy.get(':nth-child(4) > .nav-link')
      cy.should('contain.text', username)
  });
});
