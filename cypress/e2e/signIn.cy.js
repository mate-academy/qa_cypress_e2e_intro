/// <reference types="cypress" />

describe('Sign In page', () => {

  it('should provide an ability to log in', () => {

    cy.visit('#/login')

    cy.get(':nth-child(1) > .form-control').type('zero@gmail.com')

    cy.get(':nth-child(2) > .form-control').type('12345')

    cy.get('button').click()

    cy.contains('a.nav-link','zero12').should('contain.text','zero12')
  });
});
