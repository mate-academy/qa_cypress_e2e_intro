/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('/').get('.nav-link').contains('Sign in').click();
    cy.get('[placeholder="Email"]').type('pashal12@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('sasoter');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain', 'pashal12');
  });
});
