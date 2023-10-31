/// <reference types="cypress" />

describe('Sign In page', () => {
  before(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('should provide an ability to log in', () => {
    cy.contains('Sign in').click();

    const email = 'TestSnemail@gmail.com';
    const password = 'Test123';

    cy.get(':nth-child(1) > .form-control').type(email);

    cy.get(':nth-child(2) > .form-control').type(password);

    cy.contains('button', 'Sign in').click();

    cy.get('.nav-link')
      .should('contain', 'TestSnemai');
  });
});
