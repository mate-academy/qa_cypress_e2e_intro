/// <reference types="cypress" />

describe('Sign In page', () => {
  const password = '12345';
  const userName = 'Katii';
  const email = 'katii@gmail.com';
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.contains('Sign in')
      .click();
    cy.get('[placeholder=Email]')
      .type(email);
    cy.get('[placeholder=Password]')
      .type(password);
    cy.get('.btn').contains('Sign in')
      .should('be.visible').click();
    cy.get(':nth-child(4) > .nav-link')
      .contains(userName);
  });
});
