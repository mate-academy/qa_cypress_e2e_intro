/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
     // Visit the Sign in page
    cy.visit('https://react-redux.realworld.io/#/login');

    // Fill in email and password fields
    cy.get(':nth-child(1) > .form-control').type('dido123@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('qwQW1234!');

    // Click on the Sign In button
    cy.get('.btn').click();

    // Assert that the username appears in the header
    cy.get(':nth-child(4) > .nav-link').should('contain','dido123');
 });
});

