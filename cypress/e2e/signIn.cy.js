/// <reference types="cypress" />

const email = 'zebro@zyraf.com';
const password = 'P4$$w0rd!';

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    // Visit the Sign In page
    cy.visit('https://conduit.mate.academy/user/login/');

    // Fill in the email and password fields
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);

    // Click on the Sign In button
    cy.get('button[type="submit"]').click();

    // Assert the username appears in the site navigation (header)
    cy.get('.navbar').contains('zebrozyraf').should('be.visible');
  });
});
