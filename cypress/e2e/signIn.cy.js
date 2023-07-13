/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const email = 'dmytro.ieromin.qa@gmail.com';
    const password = 'Fcdk1927';
    const username = 'Dmier1998';

    cy.visit('https://react-redux.realworld.io');

    cy.get(':nth-child(2) > .nav-link').click();

    cy.get(':nth-child(1) > .form-control').type(email);
    cy.get(':nth-child(2) > .form-control').type(password);
    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').should('contain', username);
  });
});
