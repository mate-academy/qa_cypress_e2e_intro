// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { generateNewUser } = require("./generateNewUser")

Cypress.Commands.add('signUp', () => {
    const { email, username, password } = generateNewUser()

    cy.request('POST', 'https://api.realworld.io/api/users', {
        "user": {
            username,
            email,
            password
        }
    }).then(response => ({
        ...response.body.user,
        password
    }))
})

Cypress.Commands.add('findByPlaceholder', (name) => {
    cy.get(`[placeholder="${name}"]`)
})