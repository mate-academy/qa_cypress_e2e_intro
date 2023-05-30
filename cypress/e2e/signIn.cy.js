/// <reference types="cypress" />


describe('Sign In', () => {
  it('should visit "Sign in" page and log in successfully', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=2yktql');

    // Fill in email and password fields
    cy.get('input[type="email"]').type('urinary12@gmail.com');
    cy.get('input[type="password"]').type('Qwerty123456');

    // Click on Sign In button
    cy.contains('button', 'Sign in').click();

    // Assert that the sername appears in the site navigation menu
    cy.contains('.nav-link', 'urinary12');
  });
});
  