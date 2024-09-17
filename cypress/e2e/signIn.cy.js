/// <reference types="cypress" />

describe('Sign In page', () => {
it('should login user', () => {
 cy.visit('https://react-redux.realworld.io');
 const validEmail = 'userNam@gmail.com';
 const validPassword = 'test1234';
 const validUserName = 'usernam123';
 cy.contains('a', 'Sign in').click(); 
 cy.get(':nth-child(1) > .form-control')
   .type('userNam@gmail.com');
   cy.get(':nth-child(2) > .form-control')
   .type('test1234');
   cy.get('.btn').click();
   cy.get(':nth-child(4) > .nav-link');
});
});
