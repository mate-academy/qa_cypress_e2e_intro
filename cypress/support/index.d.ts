/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        findByPlaceholder(placeholder: string): Chainable<any>
        registerNewUser(username: string, email: string, password: string): Chainable<any>
        logout(): Chainable<any>
    }
}
