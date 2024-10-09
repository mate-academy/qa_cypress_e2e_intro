describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    // Visit the Sign In page
    cy.visit('https://react-redux.realworld.io/#/login');

    // Fill in email and password fields with data
    cy.get('input[type=email]').type('miretta2@ukr.net');
    cy.get('input[type=password]').type('Miretta29+');

    // Click on [Sign In] button
    cy.get('button[type=submit]').click();

    // Assert that the username appeared in the "Site navigation (Header)" menu
    cy.get('.nav-item', { timeout: 10000 })
      .contains('miretta2')
      .should('be.visible');
  });
});
