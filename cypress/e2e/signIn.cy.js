/// <reference types="cypress" />

const email = 'abcd1234567@gmail.com';
const password = '1234';

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    // Visit sign in page
    cy.visit('https://conduit.mate.academy/user/login');

    // Fill in email and password fields as valid data
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);

    // Click on [Sign In] button
    cy.get('button[type="submit"]').click();

    // Assert your username appeared in "Site navigation (Header)" menu.
    cy.get('.navbar').contains('asdffghjk').should('be.visible');
  });
});
