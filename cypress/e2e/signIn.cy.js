/// <reference types="cypress" />

const { createVerify } = require("crypto");

const logName = 'DenTester11'

describe('Sign In page', () => {


  it('should be available to open from the main page', () => {
    /* просто так зробив*/
    cy.visit('https://react-redux.realworld.io')
    .get(':nth-child(2) > .nav-link').should('contain.text', 'Sign in').click()
    .url().should('contain', 'react-redux.realworld.io/#/login?')
    .get('h1.text-xs-center').should('contain.text', 'Sign In')
  });  

  it('should provide an ability to log in', () => {

    /*Visit "Sign in" page.*/
    cy.visit('https://react-redux.realworld.io/#login')

    /*Fill in email and password fields as valid data.*/
    cy.get(':nth-child(1) > .form-control').type('DenTester11@den.de')
    cy.get(':nth-child(2) > .form-control').type('DenTester11')

    /* Click on [Sign In] button.*/
    cy.get('.btn').click()

    /*Assert your username appeared in "Site navigation (Header)" menu.*/
    cy.get(':nth-child(4) > .nav-link').should('contain.text', 'DenTester11')
  });



});
