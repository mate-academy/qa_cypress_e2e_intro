/// <reference types="cypress" />

describe('Sign In page', () => {
  const email = 'kitofivo@gmail.com'; // Replace with your valid email
  const password = '1111'; // Replace with your valid password
  const username = 'kitofivo'; // Replace with your valid username

  it('should provide an ability to log in', () => {
    // Visit the Sign In page
    cy.visit('https://react-redux.realworld.io/#/login');

    // Fill in email and password fields
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);

    // Click on [Sign In] button
    cy.get('button[type="submit"]').click();

    // Assert your username appeared in "Site navigation (Header)" menu
    cy.get('.nav-link').contains(username).should('be.visible');
  });
});
