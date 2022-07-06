/// <reference types="cypress" />

describe('Sign in page', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it('should contains username appeared in "Site navigation (Header)" menu after sign in', () => {
    cy
      .contains('a', 'Sign in')
      .click();
    cy.get('input[type="Email"]').type('userEmail@qa.team');
    cy.get('input[type="Password"]').type('123456Qwert!');
    cy.get('button[type="submit"]').click();
    cy.get('.navbar-nav').get('.nav-link').should('contain.text', 'UserName2');
  });
});

const { generateUser } = require('../support/generate');

describe('Your Second Test', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it.only('Sign up with faker', () => {
    const user = generateUser();
    cy.get('a').contains('Sign up').click();
    cy.get('input[placeholder="Username"]').type(user.username);
    cy.get('input[placeholder="Email"').type(user.email);
    cy.get('input[placeholder="Password"').type(user.password);
    cy.get('button[type="submit"]').click();
    cy.get('a').get('.nav-link').should('contain.text', user.username);
  });
});
