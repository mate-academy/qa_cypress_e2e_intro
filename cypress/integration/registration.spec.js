describe('registration new user', () => {
  beforeEach(() => {
  cy.visit('https://react-redux.realworld.io/');
});   

  it('registrate new user', () => {
    const randomNumber = Math.random().toString().slice(2);
    const userName = `testUser-${randomNumber}`;
  cy.contains('a', 'Sign up')
      .should('exist')
      .click();
  cy.url()
      .should('include', '/register');
  cy.get('h1.text-xs-center')
      .should('contain.text', 'Sign Up');
      cy.get('[placeholder="Username"]')
      .type(userName);
      cy.get('[placeholder="Email"]')
      .type(`${userName}@gmail.com`);
      cy.get('[placeholder="Password"]')
      .type('123456!');
      cy.contains('.btn', 'Sign in')
      .click();
      cy.contains('a', `${userName}`)
    .should('exist');
         });
        });   

