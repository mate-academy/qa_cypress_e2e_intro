/// <reference types="cypress" />

describe('Sign In page', () => {
  const email = 'qayf@test.com';

  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.get(':nth-child(2) > .nav-link');
    cy.contains('Sign in').click();
    cy.get(':nth-child(1) > .form-control')
      .type(email);
    cy.get(':nth-child(2) > .form-control')
      .type('test1234');
    cy.get('.btn').click();
  });
});
