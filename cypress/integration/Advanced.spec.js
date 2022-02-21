/// <reference types="cypress" />
 
const { generateUser } = require("../support/generate");
 
describe('Sign up', () => {
          
   it('should allow to register a new user', () => {
     cy.visit('https://react-redux.realworld.io/#/register')
     const {email, password, username} = generateUser();
     cy.get('[placeholder="Username"]')
     .type(username)
 
     cy.get('[placeholder="Email"]')
     .type(email)
 
     cy.get('[placeholder="Password"]')
     .type(password)
 
     cy.contains('.btn', 'Sign in')
     .click()
 
     cy.get(':nth-child(4) > .nav-link')
   .should('contain.text', username);
 
   })
 
 
 });
