/// <reference types="cypress" />

const baseUrl = 'https://react-redux.realworld.io';

describe('Sign In page', () => {
  beforeEach(()=> {
    cy.visit(baseUrl + '/#/login')
  })
  it('should provide an ability to log in', () => {

    cy.get('[placeholder="Email"]')
      .type('vuwequ@mailinator.com')

    cy.get('[placeholder="Password"]')
      .type('Pa$$w0rd!')

    cy.contains('.btn', 'Sign in')
      .click()

    cy.get(':nth-child(4) > .nav-link')
     .should('contain', 'Aliquip consequat C');
  });
});
