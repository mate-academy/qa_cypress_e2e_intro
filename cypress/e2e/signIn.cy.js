/// <reference types="cypress" />

// const rundomNumber = Math.random().toString().slice(2);
// const rundomUserName = `user_Yurii${rundomNumber}`;
// const rundomEmail = `${rundomUserName}@i.ua`;
const registeredUserName = 'EstexplicaboAliq';
const registeredEmail = 'pafo@mailinator.com';
const password = 'Qwer123@';

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');
    // cy.get(':nth-child(3) > .nav-link').should('contains.text', 'Sign up');
    // cy.get(':nth-child(3) > .nav-link').click();
    // cy.get(':nth-child(1) > .form-control').type(rundomUserName);
    // cy.get(':nth-child(2) > .form-control').type(rundomEmail);
    // cy.get(':nth-child(3) > .form-control').type(password);
    // cy.get('.btn').click();
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type(registeredEmail);
    cy.get(':nth-child(2) > .form-control').type(password);
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain', registeredUserName);
  });
});
