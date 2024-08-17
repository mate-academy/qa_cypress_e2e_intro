describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.intercept('POST', '**/api/users/login', {
      statusCode: 200,
      body: {
        user: {
          email: 'User228@gmail.com',
          token: 'fake-jwt-token',
          username: 'User228'
        }
      }
    }).as('loginRequest');

    cy.visit('https://react-redux.realworld.io/#/login');
    cy.get(':nth-child(1) > .form-control').type('User228@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('User228');
    cy.get('.btn').click();
    cy.wait('@loginRequest');
    cy.get(':nth-child(4) > .nav-link').should('contain.text', 'User228');
  });
});
