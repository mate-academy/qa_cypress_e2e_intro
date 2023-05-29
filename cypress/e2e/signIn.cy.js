/// <reference types="cypress" />
const random = Math.floor(Math.random (1000) * 1000);
const userName = `user_den${random}`;
const email = `${userName}@gmail.com`;

describe('Registration', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('Register a new user', () => {
    cy.get(':nth-child(3) > .nav-link')
    .click ();
    cy.get(':nth-child(1) > .form-control')  
    .type (userName);
    cy.get(':nth-child(2) > .form-control')
    .type (email);
    cy.get(':nth-child(3) > .form-control')
    .type("Qwerty!23");
    cy.get('.btn')
    .click();
    cy.get(':nth-child(4) > .nav-link')
    .should('contain',userName)
  });
});
