/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {});

  beforeEach(() => {
    cy.visit('/user/login');
  });

  it(`should have 'Email' field `, () => {
    cy.get(`input[type='email']`).should('exist');
  });
  it(`should have 'Password' field `, () => {
    cy.get(`input[type='password']`).should('exist');
  });
  it(`should have 'Sign in' button `, () => {
    cy.get(`button[type='submit']`).should('exist');
  });

  it(`should login user with valid Email and Password`),
    () => {
      cy.get(`input[type='email']`).type('khamirez11@gmail.com');

      cy.get(`input[type='password']`).type('Q1asdfghjkl');

      cy.get(`button[type='submit']`).click();

      cy.contains('khamirez').should('exist');
    };
});
