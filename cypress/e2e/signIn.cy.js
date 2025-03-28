/// <reference types="cypress" />
describe('Sign In page', () => {
  beforeEach(() => {
 cy.visit('https://react-redux.realworld.io')
});
it('should provide an ability to log in', () => {
cy.contains('a', 'Sign in').click();
cy.url().should('include','/login');
cy.get(':nth-child(1) > .form-control')
 .type('userNam@gmail.com');
 cy.get(':nth-child(2) > .form-control')
 .type('test1234');
 cy.get('.btn').click();
 cy.get('.navbar')
 .should('contain.text', 'userna123' );
});
});

