/// <reference types="cypress" />
const { generateUser } = require('../support/generate');
beforeEach(() => {
  cy.visit('https://react-redux.realworld.io');
})

describe('First Conduit test', () => {
  it('Conduit auto tests for Sign In form', () => {

    cy.get(':nth-child(2) > .nav-link')
      .click();

    cy.get('h1.text-xs-center')
      .should('contain', 'Sign In');

    cy.get(':nth-child(1) > .form-control')
      .type('newUser12@gmail.com');

    cy.get(':nth-child(2) > .form-control')
      .type('12345Qwert!');

    cy.get('.btn')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain', 'newUser12');
  })
})

describe('Second Conduit test', () => {
  it('Sign up with faker', () => {
    const user = generateUser();
    const userName = user.username;
    const email = user.email;
    const password = user.password;

    cy.get(':nth-child(3) > .nav-link')
      .contains('.nav-link', 'Sign up')
      .click();

    cy.contains('h1.text-xs-center', 'Sign Up');

    cy.get(':nth-child(1) > .form-control')
      .type(userName);

    cy.get(':nth-child(2) > .form-control')
      .type(email);

    cy.get(':nth-child(3) > .form-control')
      .type(password);

    cy.get('.btn')
      .contains('.btn', 'Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .contains('.nav-link', userName);
  })
})
