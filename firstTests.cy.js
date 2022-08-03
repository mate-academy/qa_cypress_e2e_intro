/// <reference types="cypress" />
 


describe('Basic level Test', () => {
  it('Basic level Test', () => {
    
     cy.visit('https://react-redux.realworld.io')
     
     cy.get(':nth-child(2) > .nav-link')
       .should('contain.text', 'Sign in')
       .click()
     
     cy.get(':nth-child(1) > .form-control')
       .type('user@mailinator.com')

     cy.get(':nth-child(2) > .form-control')
       .type('123123')

     cy.get('.btn')
       .click()

     cy.get(':nth-child(4) > .nav-link')
       .should('contain.text', 'Tester_Maksym')  
  });
});

