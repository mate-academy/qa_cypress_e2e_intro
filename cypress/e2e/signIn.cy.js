describe('Sign In page', () => {
  beforeEach(() => cy.visit('https://conduit.mate.academy/user/login'));
  

  it('should provide an ability to log in', () => {
    cy.url().should('contain', 'login');
    cy.get(':nth-child(1) > .form-control').type(Cypress.env('email'));
    cy.get(':nth-child(2) > .form-control').type(Cypress.env('password'));
    cy.get('.btn').click();
  });
});