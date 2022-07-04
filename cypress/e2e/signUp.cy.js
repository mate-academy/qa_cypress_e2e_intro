const { generateUser } = require("../support/jenerate");

describe('Sign up', () => {
    beforeEach(() => {
        cy.visit('https://react-redux.realworld.io/#/register')
    });
    
    it('should allow to register a new user', () => {
        const { email, password, username } = generateUser();
        
        cy.get(':nth-child(1) > .form-control')
            .type(username)
        
        cy.get('[placeholder="Email"]')
            .type(email)
        
        cy.get('[placeholder="Password"]')
            .type(password)
        
        cy.contains('.btn', 'Sign in')
            .click()
        
        cy.url()
            .should('contain', 'https://react-redux.realworld.io/#/?_k')
        
        cy.get(':nth-child(4) > .nav-link')
        .should('contain', username)

    });

     it('should not allow to register a new user with existing email', () => {
          cy.registerNewUser().then(user => {

        cy.get('[placeholder="Username"]')
            .type(user.username + '_new')
        
        cy.get('[placeholder="Email"]')
            .type(user.email)
        
        cy.get('[placeholder="Password"]')
            .type(user.password)
        
        cy.contains('.btn', 'Sign in')
            .click()
              
              cy.get('.error-messages > li')
              .should('contain', 'email has already been taken')
        })
   });
});