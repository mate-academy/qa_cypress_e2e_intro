/// <reference types="cypress" />

describe('login page', () => {
  it('should allow user to register with registered data', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(2) > .nav-link')
    .click();

    cy.get(':nth-child(1) > .form-control')
    .type('yadonchuk@gmail.com');

    cy.get(':nth-child(2) > .form-control')
    .type('12345qwertY');

    cy.get('.btn')
    .click();
    
    cy.get(':nth-child(4) > .nav-link')
    .should('contain', 'yadonchuk');
  });
});
