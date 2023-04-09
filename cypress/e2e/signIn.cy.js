/// <reference types="cypress" />

describe('Sign In page', () => {
    const username = "TestUser" + Math.floor(Math.random() * 1000)
    const email = `${username}@test.com`
    const password = 'Test123456!'

    it('should provide an ability to log in', () => {
        cy.visit('https://react-redux.realworld.io')

        cy.contains('a', 'Sign up')
            .click()

        cy.get('[placeholder="Username"]')
            .type(username)

        cy.get('[placeholder="Email"]')
            .type(email)

        cy.get('[placeholder="Password"]')
            .type(password)

        cy.contains('.btn', 'Sign in')
            .click()

        cy.contains('a', username)
            .should('exist'); 

    });
});
