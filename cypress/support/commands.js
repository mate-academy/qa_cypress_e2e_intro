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

Cypress.Commands.add('login', (email = 'piotrwandas99@gmail.com', password = 'Haslo123456!') => {
    cy.request({
        method: 'GET',
        url: 'https://www.sinsay.com/pl/pl/customer/account/login/#login',
    }).then((response) => {
        let formKey = response.body.match(/'formKey':................'/gm).toString()
        let formKeyArray = formKey.split(': ')
        let formKeyValue = formKeyArray[1].toString()
        let formKeyValueClean = formKeyValue.replace("'", "").replace("'", "")
        cy.log(formKeyValueClean)
        cy.request({
            method: 'POST',
            url: 'https://www.sinsay.com/pl/pl/ajx/customer/login/referer/aHR0cHM6Ly93d3cuc2luc2F5LmNvbS9wbC9wbC8,/uenc/aHR0cHM6Ly93d3cuc2luc2F5LmNvbS9wbC9wbC8,/?lpp_new_login',
            form: true,
            body: {
                'login[username]': email,
                'login[password]': password,
                'form_key': formKeyValueClean
            }
        })
    })
})