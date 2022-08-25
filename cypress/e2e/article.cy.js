/// <reference types="cypress" />


// const { describe } = require("mocha");
 const {generateUser} = require ("../support/generate.js");

  describe('Login page', () => {
    it('should login with valid date', () => {
      cy.visit('https://react-redux.realworld.io');

      cy.get(':nth-child(2) > .nav-link')
      .click();
     
      cy.get(':nth-child(1) > .form-control')
      .type('ramm_mann@gmail.com')

      cy.get(':nth-child(2) > .form-control')
      .type('232101Qq')

      cy.get('.btn')
      .click();

    });

    describe ('Create article', () => {
        it('should create new article', () => {
            const {username, email, password, words, futureDate, jobArea, weekday } = generateUser(); 

            cy.get('.container > .nav > :nth-child(2) > .nav-link')
            .click();

            cy.get(':nth-child(1) > .form-control')
            .type(futureDate)

            cy.get(':nth-child(2) > .form-control')
            .type(weekday)

            cy.get(':nth-child(3) > .form-control')
            .type(words)

            cy.get(':nth-child(3) > .form-control')
            .type(jobArea)

            cy.get('.btn')
            .click()

            cy.get('h1')
            .should('contain', futureDate)


        })
    })
  
      
    });