describe('Home page', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/')
  })

  it('should open Sign In page', () => {
    cy.contains('a', 'Sign in')
      .should('exist')
      .click();

    cy.url()
      .should('include', '/login');
  });
});