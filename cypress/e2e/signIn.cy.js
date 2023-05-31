/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {

    cy.visit('/login');

    cy.url()
    .should('include', '/login');

    cy.get('h1')
    .contains('Sign In');
  });
  it('should provide an ability to log in', () => {

    cy.get('input[type="email"]').type('andreykuzmich91@qa1.com');

    cy.get('input[type="password"]').type('12345678');

    cy.get('button[type = "submit"]').click();

    cy.contains('a', 'aaaaaaaaaaaaaaaaaaaaaaaaaa1').click();
   
    
  });
});
