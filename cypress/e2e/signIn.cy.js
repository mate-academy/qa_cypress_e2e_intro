describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://conduit.mate.academy/user/login');
    cy.get('input[type="email"]').click();
    cy.get('input[type="email"]').type('mlemeshev@i.ua');
    cy.get('input[type="password"]').click();
    cy.get('input[type="password"]').type('User1234');
    cy.get('.btn').click();
    cy.get('#__next > nav > div > ul > li:nth-child(4) > a')
      .should('contain', 'mlemeshev');
  });
});
