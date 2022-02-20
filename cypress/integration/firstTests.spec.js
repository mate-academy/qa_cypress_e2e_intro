/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign in page', () => {
  it('should allow an existing user to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=fvr9ge');

    cy.get('[placeholder="Email"]')
      .type('andoon@mail.com');

    cy.get('[placeholder="Password"]')
      .type('1234' + '{enter}');

    cy.get('[href="#@andoon"]')
      .should('contain.text', 'andoon')
  });
});

describe('Sign up page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/register?_k=e72776');
  });

  it.only('should allow to register a new user with faker', () => {
    const user = generateUser();
    
    cy.get('[placeholder="Username"]')
      .type(user.username);

    cy.get('[placeholder="Email"]')
      .type(user.email);

    cy.get('[placeholder="Password"]')
      .type(user.password + '{enter}');

    cy.get(`[href="#@${user.username}"]`)
      .should('contain.text', user.username);
  });
});
