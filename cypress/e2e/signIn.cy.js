/// <reference types="cypress" />
const email = 'testset@qa.team';
const password = 'IhorHuliaiev2410';

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/');
    cy.get(':nth-child(2) > .nav-link')
    .click();
    cy.get('[placeholder="Email"]')
    .type(email);
    cy.get('[placeholder="Password"]')
    .type(password);
    cy.get('.btn')
    .click();
    cy.contains('IhorHuliaiev')
    .should('be.visible');
  });
});
