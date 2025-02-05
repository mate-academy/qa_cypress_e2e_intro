/// <reference types="cypress" />

const userName = 'test_test123456';
const password = 'Test_test123456@mail.com';
describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/');
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get('.form-control.form-control-lg[type="email"]')
      .type(`${userName}@mail.com`);
    cy.get('.form-control.form-control-lg[type="password"]')
      .type(password);
    cy.get('.btn').click();
    cy.get('.nav-link').should('contain.text', userName).and('be.visible');
  });
});
