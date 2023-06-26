/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in', () => {
    const userName = 'Alf_2116';

    cy.FindByPlaceholder('Email').type(userName.toLocaleLowerCase() + '@mail.com');
    cy.FindByPlaceholder('Password').type('123456');

    cy.contains('.btn', 'Sign in').click();

    cy.get(':nth-child(4) > .nav-link').contains(userName);
  });
});
