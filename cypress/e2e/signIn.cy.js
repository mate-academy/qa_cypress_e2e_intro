/// <reference types="cypress" />

describe('Sign in', () => {
    it('should allow to an existing user to log in', () => {
         cy.visit('https://react-redux.realworld.io/#/login')

         cy.registerNewUser().then(user => {
             cy.get('[placeholder="Email"]')
            .type(user.email)
        
        cy.get('[placeholder="Password"]')
            .type(user.password)
             
             cy.contains('.btn', 'Sign in')
                 .click()
             
             cy.get(':nth-child(4) > .nav-link')
             .should('contain', user.username)
         })
    });   
})