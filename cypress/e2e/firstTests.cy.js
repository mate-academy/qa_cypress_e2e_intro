/// <reference types="cypress" />
const { generateUser } = require('../support/generate');

describe('Sign Up / In page', () => {
  const { email, password, username } = generateUser();

  // Second Test | sign up with faker
  it('Sign up with faker', () => {  
    
    // register
    cy.visit('/#/register');

    cy.get('[placeholder = "Username"]')
      .type(username);
    
    cy.get('[placeholder = "Email"]')
      .type(email);
    
    cy.get('[placeholder = "Password"]')
      .type(password);
    
    cy.contains('.btn', 'Sign in') // error on the site in the name of the button
      .click();
     
     cy.get(`[href="#@${username}"]`)
       .should('exist')
       .should('contain.text', username);
    
    cy.url()
      .should('contain', Cypress.config().baseUrl + '/');
     
    // logout
    cy.contains('a', 'Settings')
      .click();
    
    cy.contains('button', 'Or click here to logout.')
      .click(); 
    
    cy.contains('a', 'Sign in')
      .should('exist');
   });
  
  // First test | Sign In with valid data
  it('Sign In with valid data', () => {

    cy.contains('a', 'Sign in')
      .click();
     
    cy.url()
      .should('include', '/login');
    
    cy.get('h1')
      .should('contain.text', 'Sign In');
     
    cy.get('[placeholder = "Email"]')
      .type(email);
    
    cy.get('[placeholder = "Password"]')
      .type(password);
     
    cy.contains('.btn', 'Sign in') 
      .click();
    
    cy.get(`[href="#@${username}"]`)
      .should('exist')
      .should('contain.text', username);
  })
});
