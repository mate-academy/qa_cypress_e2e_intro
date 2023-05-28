/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=m07odl')

    cy.get('input[type="email"]').type('andreykuzmich91@qa1.com');

    cy.get('input[type="password"]').type('12345678');

    cy.get('button[type = "submit"]').click();

    cy.contains('a', 'aaaaaaaaaaaaaaaaaaaaaaaaaa1').click();
   
    
  });
});
