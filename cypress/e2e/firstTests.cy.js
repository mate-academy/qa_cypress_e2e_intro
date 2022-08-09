/// <reference types="cypress" />

describe('My first test', () => {
  it('should open Sign in Page', () => {
    cy.visit('https://react-redux.realworld.io/')
    .get('a')
    .should('contain.text', 'conduit');

    cy.contains('Sign in')
    .should('exist')
    .click();

    cy.url('include', '/login');

    cy.get('h1')
    .should('contain.text', 'Sign In');
  });

  it('should fill fields', () => {
    cy.get(':nth-child(1) > .form-control')
    .type('test_user1@gmail.com');

    cy.get(':nth-child(2) > .form-control')
    .type('test12345');
  })

  it('should sign in user', () => {
    cy.contains('.btn', 'Sign in')
    .click();
  })

  it('should assert the username in the header', () => {
    cy.get(':nth-child(4) > .nav-link')
    .should('contain.text', 'Poliina');
  })
}); 

const { generateUser } = require('../support/e2e.js');

describe('Your Second Test', () => {

  const user = generateUser();
  
  it('Sign up with faker', () => {
        
    cy.visit('https://react-redux.realworld.io/')

    cy.contains('Sign up')
    .should('exist')
    .click();

    cy.url('include', '/register');

    cy.get('h1')
    .should('contain.text', 'Sign Up');
 
    cy.get('[placeholder="Username"]')
    .type(user.username);

    cy.get('[placeholder="Email"]')
    .type(user.email);

    cy.get('[placeholder="Password"]')
    .type(user.password);
});

  it('should sign up user', () => {
    cy.contains('.btn', 'Sign in')
    .click();
  });

  it('should assert the username in the header', () => {
    cy.get(':nth-child(4) > .nav-link')
    .should('contain.text', `${user.username}`);
  });
});