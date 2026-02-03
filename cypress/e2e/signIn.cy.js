describe('Sign in', () => {
  const user = {
    email: 'test@test.com',
    password: 'testtest',
    username: 'test',
  };

  before(() => {
    cy.visit('https://react-redux.realworld.io/#/login');
  });

  it('should sign in with valid credentials and display username in header', () => {
    cy.get('input[type="email"]')
      .clear()
      .type(user.email);

    cy.get('input[type="password"]')
      .clear()
      .type(user.password);

    cy.contains('button', 'Sign in')
      .click();

    cy.get('header')
      .should('contain', user.username);

    cy.contains('a', user.username)
      .should('be.visible');
  });
});
