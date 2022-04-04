/// <reference types="cypress" />

Cypress.Commands.add('findByPlaceholder', (placeholder) => {
    cy.get(`[placeholder="${placeholder}"]`)
});

Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    originalFn('/#' + url, options);
 });

Cypress.Commands.add('assertPageURl', (url) => {
     cy.url()
    .should('contain', Cypress.config().baseUrl + '/#' + url);
});

