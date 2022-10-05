/// <reference types="cypress" />

interface User {
  username: string;
  email: string;
  password: string;
};

declare namespace Cypress {
  interface Chainable<Subject> {
    generateFakeUser(): Chainable<User>
    registerNewUserWithForm(userData?: Partial<User>): Chainable<User>
    registerNewUserWithRequest(userData?: Partial<User>): Chainable<User>
  }
}