/// <reference types="cypress" />
describe('Sign In page', () => {

  it('should provide an ability to log in', () => {
    const email = '1test2@gmail.com';
    const password = '1test2';
     
    cy.visit('/');

    cy.contains('Sign in')
      .click();
    
    cy.contains('a', 'Sign in')
       .should('exist')
       .click();

    cy.url()
       .should('include', '/login');

    cy.get('h1')
       .should('contain.text', 'Sign In');

    cy.get('[placeholder="Email"]')
       .type(email);

    cy.get('[placeholder="Password"]')
       .type(password);

    cy.contains('.btn', 'Sign in')
       .click();

    cy.get('a')
       .should('contain.text', '1test2');
    
  });

   });