/// <reference types= "cypress" />
const { generateUser } = require('../support/generate');

describe('My first test', () => {

 it('for Sign In page', () => {
  cy.visit(`https://react-redux.realworld.io`);

   cy.contains('a', 'Sign in')
     .click();

    cy.get('[placeholder="Email"]')
     .type('testUser@mail.com');

    cy.get('[placeholder="Password"]')
     .type('1234qwer');

    cy.contains('button', 'Sign in')
     .click();

    cy.get('.navbar-nav li:last-child a')
     .should('contain.text', 'Test_user');
  });


  it('for Sign Up page', () => {
    const { username, email, password } = generateUser();

    cy.visit(`https://react-redux.realworld.io`)
    
     cy.contains('a', 'Sign up')
         .click();
    
     cy.get('[placeholder="Username"]')
        .type(username)
    
     cy.get('[placeholder="Email"]')
         .type(email)
    
     cy.get('[placeholder="Password"]')
         .type(password)
    
     cy.contains('button', 'Sign in')
         .click();
    
     cy.get('.navbar-nav li:last-child a')
         .should('contain.text', username);
    })
});