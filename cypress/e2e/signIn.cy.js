/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const username = 'qatest2727';
    const email = username + '@gmail.com';
    const password = 'P@ssword123!';

    cy.visit('https://react-redux.realworld.io/#/login');

    cy.get(':nth-child(1) > .form-control').type(email);

    cy.get(':nth-child(2) > .form-control').type(password);

    cy.get('.btn').click();
    cy.get('.navbar').last().should('contain.text', username);
  });
});
