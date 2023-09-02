/// <reference types="cypress" />
describe('Sign In page', () => {
  beforeEach(() => {
 cy.visit('https://react-redux.realworld.io')
});
it('should provide an ability to log in', () => {
 const randomNumber = Math.random().toString().slice(2);
 const userName = `test_user_${randomNumber}`;
cy.contains('a', 'Sign in').click();
cy.url().should('include','/login');
cy.get(':nth-child(1) > .form-control')
 .type('userName@gmail.com');
 cy.get(':nth-child(2) > .form-control')
 .type('test1234');
 cy.get('.btn').click();
 cy.get('.navbar')
 .should('contain.text', userName );
});
});

