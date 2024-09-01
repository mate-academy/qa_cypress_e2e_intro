/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it(`should have 'conduit' link`, () => {
    cy.contains('a', 'conduit')
      .should('exist');
  });

  it(`should have 'Home' link`, () => {
    cy.contains('a', 'Home')
      .should('exist');
  });

  it(`should have 'Sign In' link`, () => {
    cy.contains('a', 'Sign in')
      .should('exist');
  });

  it(`should have 'Sign Up' link`, () => {
    cy.contains('a', 'Sign up')
      .should('exist');
  });

  it(`should have 'Sign In' header`, () => {
    cy.get('h1')
      .should('contain.text', 'Sign In');
  });

  it(`should have 'Need an account?' link`, () => {
    cy.contains('a', 'Need an account?')
      .should('exist');
  });

  it(`should have 'Email' field`, () => {
    cy.get(`input[type='email']`)
      .should('exist');
  });

  it(`should have 'Password' field`, () => {
    cy.get(`input[type='password']`)
      .should('exist');
  });

  it(`should have 'Sign In' button`, () => {
    cy.get(`button[type='submit']`)
      .should('exist');
  });

  it('should login user with valid data', () => {
    cy.get(`input[type='email']`)
      .type('r.bozhenko@domain.com');

    cy.get(`input[type='password']`)
      .type('Q!w2e3r4');

    cy.get(`button[type='submit']`)
      .click();

    cy.contains('a', 'GregoryBRL')
      .should('exist');
  });
});
