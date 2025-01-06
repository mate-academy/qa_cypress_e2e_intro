Cypress.Commands.add('login', (user) => {
  cy.session(user, () => {
    cy.visit('/user/login');
    cy.get(`input[type=email]`).type(user.email);
    cy.get(`input[type=password]`).type(user.password);
    cy.get('.btn').click();
    cy.get('a').contains(user.name).should('be.visible');
  });
});
