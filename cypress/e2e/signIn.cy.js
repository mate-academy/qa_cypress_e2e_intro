describe('Sign In page', () => {
  const email = 'mlemeshev@i.ua';
  const password = 'User1234';
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/user/login');
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.get('.btn').click();
    cy.get('#__next > nav > div > ul > li:nth-child(4) > a')
      .should('contain', 'mlemeshev');
  });
});
