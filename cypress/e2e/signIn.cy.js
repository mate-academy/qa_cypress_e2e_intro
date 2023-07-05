/// <reference types="cypress" />
describe('Sign In page', () => {
  beforeEach(() => {
  cy.visit('/')
});

  it('should provide an ability to log in', () => {
  // const randomNumber = Math.random().toString().slice(2)
  // const userName = test_user+${randomNumber};
  //const email = ${userName}@gmail.com;
    
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
       .type('1test2@gmail.com');

    cy.get('[placeholder="Password"]')
       .type('1test2');

    cy.contains('.btn', 'Sign in')
       .click();

    cy.get('a')
       .should('contain.text', '1test2');
    
    cy.url()
       .should('include', '#/');

  });

});