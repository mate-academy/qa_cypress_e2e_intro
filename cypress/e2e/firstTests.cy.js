/// <reference types="cypress" />
const {generateUser} = require ("../support/generateUser");

describe('First test', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('should login user with valid data', () => {
    
    cy.get(':nth-child(2) > .nav-link')
    .click()

    cy.get(':nth-child(1) > .form-control')
    .type('tst@tt.rr')

    cy.get(':nth-child(2) > .form-control')
    .type('test123')

    cy.get('.btn')
    .click()

    cy.get(':nth-child(4) > .nav-link')
    .should('contain', 'test890')
  });

  it('should register new user with valid data', () => {
    const { username, email, password } = generateUser();

        cy.visit('https://react-redux.realworld.io');
        
        cy.get(':nth-child(3) > .nav-link')
        .click()

        cy.get(':nth-child(1) > .form-control')
        .type(username)

        cy.get(':nth-child(2) > .form-control')
        .type(email)

        cy.get(':nth-child(3) > .form-control')
        .type(password)

        cy.get('.btn')
        .click()

        cy.get(':nth-child(4) > .nav-link')
        .should('contain', username)

      });
    });
  
    

    



    




    


  