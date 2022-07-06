/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign in', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login')
  });
  
  it('Should allow to sign in', () => {
    cy.get(':nth-child(1) > .form-control')
      .type('tester_user1@gmail.com');
    
    cy.get(':nth-child(2) > .form-control')
      .type('Password1!');

    cy.contains('.btn', 'Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', 'tester_user1');
  });
});

describe('Sign up', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/register')
  });
  
  it('Should allow to sign up', () => {
    
    const user = generateUser();

    cy.get(':nth-child(1) > .form-control')
      .type(`${user.username}`);
    
    cy.get(':nth-child(2) > .form-control')
      .type(`${user.email}`);
    
    cy.get(':nth-child(3) > .form-control')
      .type(`${user.password}`);
    
    cy.contains('.btn', 'Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', `${user.username}`);
  });
});