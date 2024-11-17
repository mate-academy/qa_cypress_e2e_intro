/// <reference types="cypress" />

describe('Conduit', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it(`should have a working 'Sign in' link`, () => {
    cy.contains('p', 'A place to share your knowledge.');
    cy.contains('.nav-link', 'Sign in').click();
    cy.url().should('include', 'login');
  });
});
