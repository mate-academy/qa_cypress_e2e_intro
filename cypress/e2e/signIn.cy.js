/// <reference types='cypress'/>

beforeEach(() => {
  cy.visit('/');
});

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.get(':nth-child(2) > .nav-link').contains('Sign in').click();

    cy.get(':nth-child(1) > .form-control')
      .should('have.attr', 'placeholder', 'Email')
      .type('makskrasava@ukr.net');

    cy.get(':nth-child(2) > .form-control')
      .should('have.attr', 'placeholder', 'Password')
      .type('K123456$k');

    cy.get('.btn').click();

    cy.get(':nth-child(4) > .nav-link').contains('makskrasava').should('exist');
  });
});
