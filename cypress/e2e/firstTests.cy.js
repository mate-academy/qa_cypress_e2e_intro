/// <reference types="cypress" />

const { generateUser } = require("../support/generateUser");

describe('Registration and login', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/?_k=y95wz7');
  });

  it('should register a new user with valid data and login with existing data', () => {
    const { userName, email, password } = generateUser();

    cy.get(':nth-child(3) > .nav-link')
    .click();
    cy.get(':nth-child(1) > .form-control')
    .type(userName);
    cy.get(':nth-child(2) > .form-control')
    .type(email);
    cy.get(':nth-child(3) > .form-control')
    .type(password);
    cy.get('.btn')
    .click()
    cy.get(':nth-child(4) > .nav-link')
    .should('contain', userName);

    cy.get(':nth-child(3) > .nav-link')
    .click();
    cy.get('.btn-outline-danger')
    .click();

    cy.get(':nth-child(2) > .nav-link')
    .click();
    cy.get(':nth-child(1) > .form-control')
    .type(email);
    cy.get(':nth-child(2) > .form-control')
    .type(password);
    cy.get('.btn')
    .click();
    cy.get(':nth-child(4) > .nav-link')
    .should('contain', userName);

  });

  it('login with test data', () => {
cy.get(':nth-child(2) > .nav-link')
    .click();
    cy.get(':nth-child(1) > .form-control')
    .type('Joy_Reinger@gmail.com');
    cy.get(':nth-child(2) > .form-control')
    .type('jwmV7Z5oyXSxran');
    cy.get('.btn')
    .click();
    cy.get(':nth-child(4) > .nav-link')
    .should('contain', 'Orlo.Grant6_939' );

  })
});

