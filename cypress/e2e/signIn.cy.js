/// <reference types="cypress" />

const { random } = require("cypress/types/lodash");

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {

    const userName = 'qaqa11';
    const email = 'qaqa11@gmail.com';
    const password = 'qaqa11';

    cy.visit('https://react-redux.realworld.io');

    cy.contains('Sign in');
    cy.get(':nth-child(2) > .nav-link').click();

    cy.get(':nth-child(1) > .form-control').type(email);
    cy.get(':nth-child(2) > .form-control').type(password);

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', userName);

  });
});
