/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('User should be able', () => {
   
  it('to open Sign In page', () => {

    cy.visit('/')
    
    cy.contains('a','Sign in')
    .should('exist')
    .click();

    cy.url()
    .should('include', '/login');

    cy.get('h1')
    .should('contain.text', 'Sign In')
  })

  it('to login', () => {

    cy.visit('/#/login');

    cy.get('[placeholder="Email"]')
    .type('testUser123456789@gmail.com');

    cy.get('[placeholder="Password"]')
    .type('testUser123456789');

    cy.contains('.btn', 'Sign in')
    .click();

    cy.get('.navbar-nav li:last-child a')
      .should('contain.text', 'testUser123456789');

  })

  it('to open Sign Up page', () => {

    cy.visit('/');
    
    cy.contains('a','Sign up')
    .should('exist')
    .click();

    cy.url()
    .should('include', '/register');

    cy.get('h1')
    .should('contain.text', 'Sign Up')
  })

  it('create an account with valid data', () => {
    cy.visit('#/register');

    const { username, email, password } = generateUser();

    cy.get('[placeholder="Username"')
    .type(username);

    cy.get('[placeholder="Email"')
    .type(email);

    cy.get('[placeholder="Password"')
    .type(password);

    cy.contains('.btn', "Sign in")
    .click();

    cy.get('.navbar-nav li:last-child a')
    .should('contain.text', username);
  })


});

