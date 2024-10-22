/// <reference types="cypress" />


describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/');
  })


  it('should provide an ability to log in', () => {
    const userName = 'fake';
    const userEmail = 'fake@gmail.com';
    const userPassword = 'Password123';

    // Navigate to the Sign in page
    cy.get('.nav-link')
      .should('exist')
      .should('contain.text', 'Sign in');
    cy.contains('Sign in').click();

  // Verify the URL and page header
    cy.url().should('include', '/login');
    cy.get('h1').should('contain.text', 'Sign in');

  // Fill in the email and password fields
    cy.get('[placeholder=Email]')
      .type(userEmail);

    cy.get('[placeholder=Password]')
      .type(userPassword);

  // Click the Sign In button
    cy.get('.btn-primary').click();

  // Assert that the username appears in the header
    cy.get('a.nav-link')
      .should('exist')
      .should('contain.text', userName);
  });
});
