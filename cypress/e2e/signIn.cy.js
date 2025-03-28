/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/#/login');
    cy.get('[placeholder="Email"]').type('myfirst-test-Pwd@gmail.com');
    cy.get('[placeholder="Password"]').type('myfirst-test-Pwd' + `{Enter}`);
    cy.get('a').should('contain.text', 'LBalakirieva');
    cy.contains('a', 'LBalakirieva')
      .should('have.attr', 'href', '#@LBalakirieva');
  });
});
