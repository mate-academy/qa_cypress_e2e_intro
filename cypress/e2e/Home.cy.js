/// <reference types="cypress" />

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have Sign in link with correct url', () => {
    cy.get('ul.navbar-nav')
      .find('a.nav-link')
      .contains('Sign in')
      .should('have.attr', 'href', '#login');
  });

  it('should have Sign up link with correct url', () => {
    cy.get('ul.navbar-nav')
      .find('a.nav-link')
      .contains('Sign up')
      .should('have.attr', 'href', '#register');
  });  
});
