/// <reference types="cypress" />


describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/');

    cy.contains('a', 'Sign in').should('exist').click();
    
    cy.url().should('include', '/login');

    cy.get('[placeholder  = "Email"]').type('danilka2007@gmail.com');

    cy.get('[placeholder  = "Password"]').type('danilka2007{enter}');

    cy.get(':nth-child(4) > .nav-link').should('contain.text', 'danilka2007')
  }); 
});