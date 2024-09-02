/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
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
