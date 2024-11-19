/// <reference types="cypress" />

const registeredUserName = 'EstexplicaboAliq';
const registeredEmail = 'pafo@mailinator.com';
const password = 'Qwer123@';

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type(registeredEmail);
    cy.get(':nth-child(2) > .form-control').type(password);
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain', registeredUserName);
  });
});
