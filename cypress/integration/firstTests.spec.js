/// <reference types="cypress" />
const { generateUser } = require("../support/generate");


describe('Tests for Sign in and Sign up', () => {
  beforeEach(() => {
      cy.visit('/')
  });

  it('Should sign in existing user', () => {
    
      cy.contains('a', 'Sign in')
        .should('exist')
        .click();

      cy.url()
        .should('include', '/login');

      cy.get('h1')
        .should('contain.text', 'Sign In');

      cy.get(':nth-child(1) > .form-control')
        .type('xixoxeniji@mailinator.com');

      cy.get(':nth-child(2) > .form-control')
        .type('Pa$$w0rd!');

      cy.contains('.btn', 'Sign in')
        .click();

      cy.get('a')
        .should('contain.text', 'QaToster');
      
  });

  it('Should allow to register new user', () => {
    const {email, password, username } = generateUser()

    cy.contains('a', 'Sign up')
        .click();

    cy.get('[placeholder="Username"]')
      .type(username);

    cy.get('[placeholder="Email"]')
      .type(email);

    cy.get('[placeholder="Password"]')
      .type(password);

    cy.contains('.btn', 'Sign in')
        .click();

    cy.get('a')
      .should('contain.text', `${username}`);
  });
});