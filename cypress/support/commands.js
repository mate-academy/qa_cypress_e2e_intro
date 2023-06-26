Cypress.Commands.add('FindByPlaceholder', (placeholder) => {
    cy.get(`[placeholder="${placeholder}"]`);
});
