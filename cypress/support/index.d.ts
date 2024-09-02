/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Returns an element containing text matching the param
     * @param placeholder String
     */
    getByPlaceholder(placeholder: string): Chainable<any>

    /**
     * Returns a button containing text matching the param
     * @param buttonText String
     */
    getButtonByText(buttonText: string): Chainable<any>

    /**
     * Clicks on the submit button, submitting the form
     * @param buttonText String
     */
    submitFormByButton(buttonText: string): Chainable<any>

    /**
     * Assert whether user is logged in
     * @param username String
     */
    isUserAuthenticated(username: string): Chainable<any>

    /**
     * Registers a new random user
     */
    registerNewUser(): Chainable<any>
  }
}