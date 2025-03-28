describe('Sign In Test', () => {
  it('should sign in successfully', () => {
    cy.visit('https://react-redux.realworld.io/#/login');
    cy.get('input[type="email"]').type('habibi@qa.com');
    cy.get('input[type="password"]').type('Qwerty12345');
    cy.contains('button', 'Sign in').click();
    cy.get('.nav-link').should('contain', 'habibi');
  });
});
