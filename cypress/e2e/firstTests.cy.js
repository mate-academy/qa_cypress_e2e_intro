/// <reference types="cypress" />

const faker = require("faker"); 

let username = faker.name.findName()
let email = faker.internet.email()
let password = faker.internet.password();

describe('User should be able', () => {
  
  
  before (() => {
    cy.visit('https://react-redux.realworld.io'); 
  });

  it('to sign in with valid data', () => {
    cy.reload();
    cy.get(':nth-child(2) > .nav-link')
     .click();
    cy.get(':nth-child(1) > .form-control')
     .type('to1t18@gmail.com');
    cy.get(':nth-child(2) > .form-control')
     .type('to1t18');
    cy.get('.btn')
     .click();
    cy.get(':nth-child(4) > .nav-link')
     .should('contain', 'to1t18');
    cy.get(':nth-child(3) > .nav-link');
   });
     
  it('to registrate a new account', () => {
    cy.reload();
    cy.get(':nth-child(3) > .nav-link')
    .click();
    cy.get(':nth-child(1) > .form-control')
     .type(username);
    cy.get(':nth-child(2) > .form-control')
     .type(email);
    cy.get(':nth-child(3) > .form-control')
     .type(password);
    cy.get('.btn')
     .click();
    cy.get(':nth-child(4) > .nav-link')
     .should('contain', username);

  });
  

});
