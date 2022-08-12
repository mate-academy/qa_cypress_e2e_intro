/// <reference types="cypress" />
import { faker } from '@faker-js/faker';


const { generateUser } = require("../support/generate");

describe('Your Second Test', () => {
  /*beforeEach(() => {
  });*/

  it('Sign up with faker', () => {
    const { email, password, username } = generateUser();

    cy.visit('https://react-redux.realworld.io/#/register')
    
    cy.get(':nth-child(1) > .form-control')
      .type(username)
    
    cy.get(':nth-child(2) > .form-control')  
      .type(email)

    cy.get(':nth-child(3) > .form-control')
      .type(password)

    cy.get('.btn')  
     .click()

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', username)
  });
});