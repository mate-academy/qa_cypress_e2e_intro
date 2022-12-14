/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io') //url
    cy.get(':nth-child(2) > .nav-link').click() //find sign in and click it
    cy.get(':nth-child(1) > .form-control').type('dima@mail.com') //finding email form and filling it
    cy.get(':nth-child(2) > .form-control').type('dima') //finding pass from and filling it
    cy.get('.btn').click() //click sign in button
    cy.get(':nth-child(4) > .nav-link').should('contain', 'dima1') //check if we are logged in
  });
});
