/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  
  it('should contain main parts', () => {
    cy.get('h1')
      .should('contain.text', 'conduit');
    
    cy.get('p')
      .should('contain.text', 'A place to share your knowledge.')
      
    cy.contains('a', 'Global Feed')
      .should('exist');

    cy.contains('.sidebar', 'Popular Tags')
      .should('exist');   
});

  it('should provide an ability to log in', () => {
    const email = "glyposti0258@example.com";
    const password = 'glyposti0258';

    cy.contains('a', 'Sign in')
      .should('exist')
      .click();

    cy.contains('a', 'Need an account?')
      .should('exist');

    cy.url()
    .should('include', '/login');

    cy.get('h1')
      .should('contain.text', 'Sign In')

    cy.get('[placeholder = "Email')
      .type(email);

    cy.get('[placeholder = "Password')
      .type(password);

    cy.contains('.btn', 'Sign in')
      .click();
  });
});