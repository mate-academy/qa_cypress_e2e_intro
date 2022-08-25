/// <reference types="cypress" />

const { generateUser } = require('../support/generateUser');

describe('Login page', () => {

  it('should login with valid data', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(2) > .nav-link')
    .click();

    cy.get(':nth-child(1) > .form-control')
    .type('khrystynaborys2304@gmail.com')

    cy.get(':nth-child(2) > .form-control')
    .type('khrystynahiy23041991')

    cy.get('.btn')
    .click()

    cy.get(':nth-child(4) > .nav-link')
    .should('contain', 'khrystynaborys')
  });

  it.only('should sign up with faker', () => {
    const { email, password, username } = generateUser();
    
    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(3) > .nav-link')
    .click();

    cy.get(':nth-child(1) > .form-control')
    .type(username);

    cy.get(':nth-child(2) > .form-control')
    .type(email)

    cy.get(':nth-child(3) > .form-control')
    .type(password)

    cy.get('.btn')
    .click()

    cy.get(':nth-child(4) > .nav-link')
    .should('contain', username);

  });
});
