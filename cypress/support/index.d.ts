/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        findByPlaceholder(placeholder: string): Chainable<any>;
        registerNewUser(): Chainable<any>;
    }
  }