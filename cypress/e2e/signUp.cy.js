/// <reference types="cypress" />

describe('Sign Up', () => {
    it('should register user', () => {
        cy.visit('/')
    
        cy.contains('a', 'Sign up')
        .should('exist')
        .click()

        const randomNumber = Math.random().toString().slice(2)
        const username = `test_user-${randomNumber}`;

        cy.get(':nth-child(1) > .form-control')
        .type(username)

        cy.get(':nth-child(2) > .form-control')
        .type(`${username}@mail.com`)

        cy.get(':nth-child(3) > .form-control')
        .type('Pa$$w0rd!');

        cy.contains('.btn', 'Sign in')
        .click();

        cy.get(':nth-child(4) > .nav-link')
        .should('exist')
    })
});