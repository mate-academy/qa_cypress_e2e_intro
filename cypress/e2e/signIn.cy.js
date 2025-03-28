/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should correctly open Sign In page', () => {
    cy.get('h1').should('contain.text', 'Sign In');
  });

  it(`should have "Email" field`, () => {
    cy.get(`input[type='email']`)
      .should('exist')
      .and('be.visible');
  });

  it(`should have "Password" field`, () => {
    cy.get(`input[type='password']`)
      .should('exist')
      .and('be.visible');
  });

  it(`should have "Sign in" button`, () => {
    cy.get(`button[type='submit']`)
      .should('exist')
      .and('be.visible');
  });

  it(`should login user`, () => {
    cy.get(`input[type='email']`)
      .type('edkido29@gmail.com');

    cy.get(`input[type='password']`)
      .type('ahalajmahalaj');

    cy.get(`button[type='submit']`)
      .click();

    cy.contains('a', 'edkido')
      .should('exist')
      .and('be.visible');
  });
});
