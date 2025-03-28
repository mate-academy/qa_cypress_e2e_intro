
describe('Sign In page', () => {
  it('should the username "osan" link appeared in the header "', () => {
    cy.visit('https://conduit.mate.academy/user/login');

    cy.get('input[type="email"]').type('osan12345!@gmail.com');
    cy.get('input[type="password"]').type('Osan12345');
    cy.get('button[type="submit"]').click();

    cy.get('.nav-link').contains('osan').should('be.visible');
  });
});
