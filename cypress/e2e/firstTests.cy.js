/// <reference types="cypress" //>

describe('Testing Sign In flow', () => {
  it('should open Sign in page', () => {
    cy.visit('https://react-redux.realworld.io')

    cy.contains('a', 'Sign in')
      .should('exist')
      .click();


    cy.url()
      .should('include', '/login');
  });

  it('should allow to login existing user', () => {
    cy.get(':nth-child(1) > .form-control')
      .type('visiters@mail.com')

    cy.get(':nth-child(2) > .form-control')
      .type('visiterspassword')

    cy.get('.btn')
      .click();
  });

  it('should username be appeared in the Header', () => {
        cy.contains('a', 'visiter')
      .should('exist')
  });
});