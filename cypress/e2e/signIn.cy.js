/// <reference types="cypress" />
describe('Sign In page', () => {
  /*beforeEach(() => {
    cy.visit('https://conduit.mate.academy/');
  }); */

  it('should provide an ability to log in', () => {
    //login
    cy.visit('https://conduit.mate.academy/user/login');
    cy.get('input[type="email"]').type('user123a@gmail.com');
    cy.get('input[type="password"]').type('Password1%');
    cy.get('button[type="submit"]').click();
    // Verify login was successful
    cy.visit('https://conduit.mate.academy/');
    cy.get('a.nav-link').eq(3).should('contain.text', 'user123a');
  });
});
//npx cypress run --spec cypress/e2e/signIn.cy.js