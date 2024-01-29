/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('should provide an ability to log in', () => {
    cy.get('h1')
      .should('contain.text', 'Sign In');

    cy.get('[placeholder=Email]')
      .type('bujynyg@mailinator.com');

    cy.get('[placeholder=Password]')
      .type('123456');

    cy.contains('.btn', 'Sign in')
      .click();

    cy.get('.nav-link')
      .should('contain.text', 'Polina2024');
  });
});
