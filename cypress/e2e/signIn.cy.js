describe('Sign in', () => {
  it('should sign in successfully', () => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit('https://conduit.mate.academy/');

    cy.get('.navbar').contains('Sign in').click();

    cy.url().should('include', '/login');

    cy.get('input[type="email"]').type('nib@gmail.com');
    cy.get('input[type="password"]').type('123');

    cy.get('button[type="submit"]').click();

    cy.get('.navbar').contains('nib').should('be.visible');
  });
});
