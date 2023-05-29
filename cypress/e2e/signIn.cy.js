/// <reference types="cypress" />
const email = 'dkhozieiev@gmail.com';
const password = 'dkhozieiev';
const username = 'dkhozieiev';

describe('Login page', () => {
  it('should login with valid date', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(2) > .nav-link')
     .click()

     cy.get(':nth-child(1) > .form-control, [placeholder = "Email"]')
     .type(email);

     cy.get(':nth-child(2) > .form-control, [placeholder = "Password"]')
     .type(password);

     cy.get('.btn')
     .click()

     cy.get(':nth-child(4) > .nav-link')
     .should('contain', username);
  });
});