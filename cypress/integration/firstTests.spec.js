/// <reference types="cypress" />

describe('Sign in', () => {
  it('Should allow to login', () => {
    cy.visit('')
    cy.contains('Sign in')
      .click();
    cy.get('h1')
      .should('contain.text', 'Sign In')
    cy.url()
      .should('include', '/login');
    cy.get('[type=email]')
      .type('qwertys@gmail.com')
    cy.get('[type=password]')
      .type('1Q2w3e4r')
    cy.get('[type=submit]')
      .click();
    cy.get('a.nav-link')
      .should('contain.text', 'qwertys')
  });
});

const { generateUser } = require('../support/generate');

describe('Sign up', () => {
  it('Sign up with faker', () => {
    const user = generateUser();
    cy.visit('')
    cy.contains('Sign up')
      .click();
    cy.get('[type=text]')
      .type(user.username)
    cy.get('[type=email]')
      .type(user.email)
    cy.get('[type=password]')
      .type(user.password)
    cy.get('[type=submit]')
      .click()
    cy.get('a.nav-link')
      .should('contain.text', user.username)
  });
});
