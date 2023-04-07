/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
   const email = 'pecyjynuq@mailinator.com'
   const password = 'Password12345'

   cy.visit('https://react-redux.realworld.io/') 
   cy.contains('Sign in').click();
   cy.get('[placeholder="Email"]').type(email)
   cy.get('[placeholder="Password"]').type(password)
   cy.contains('.btn', 'Sign in').click()
   cy.contains('.navbar', 'Minimavoluptatumes')

  });
});
