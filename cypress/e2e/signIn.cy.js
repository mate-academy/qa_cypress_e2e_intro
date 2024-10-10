
describe('Sign In page', () => {
  it('should successfully submit Sign In form', () => {
    cy.visit('https://conduit.mate.academy/user/login');
    cy.url().should('include', '/login');
    cy.get('input[type="email"]').click();
    cy.get('input[type="email"]').type('osan12345!@gmail.com');
    cy.get('input[type="password"]').click();
    cy.get('input[type="password"]').type('Osan12345');
    cy.get('button[type="submit"]').click();
  });
  it('should the username "osan" link appeared in the header "', () => {
    cy.visit('https://conduit.mate.academy/user/login');

    cy.get('input[type="email"]').type('osan12345!@gmail.com');
    cy.get('input[type="password"]').type('Osan12345');
    cy.get('button[type="submit"]').click();

    cy.get('.nav-link').contains('osan').should('be.visible');
  });
});
