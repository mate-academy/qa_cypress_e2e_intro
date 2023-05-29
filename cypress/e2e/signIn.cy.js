/// <reference types="cypress" />

const email = 'cypressfan@gmail.com';
const password = 'SecretFan0fCypress';
const username = 'JustCypressFan';

describe ('Sign In page', () => {
  it('test of ability to Sign in', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io')
  });

  test('test of ability to Sign in', () => {
    cy.contains('.nav-link', 'Sign in')
    .should('exist')
    .click();

  });

  test('Test of ability to enter password and email', () => {
    cy.get('.form-control form-control-lg', [placeholder = "Email"])
    .type(email);

    cy.get('.form-control form-control-lg', [placeholder = "Password"])
    .type(password);

  });

  test('should display the username in the header menu', () => {
    cy.get('.nav-link')
      .should('contain', username);
  });
  })
});
