

describe('Sign In page', () => {
  beforeEach(() => {
 cy.visit('https://react-redux.realworld.io')
});
it('should login user', () => {
 const randomNumber = Math.random().toString().slice(2);
 const userName = 'test_user_${randomNumber}';
it('should click on Sign In',() => {
cy.contains('a', 'Sign in').click();
cy.url().should('include','/login');
cy.get('h1').should('contain.text', 'Sign In');
cy.get(':nth-child(1) > .form-control')
 .type('userNamet@gmail.com');
 cy.get(':nth-child(2) > .form-control')
 .type('test1234');
 cy.get('.btn');
 cy.get('swal-modal')
 .should('contain.text', 'userName' );
});
});
});
