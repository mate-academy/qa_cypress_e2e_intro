describe('Sign In Test', () => {
  it('should sign in and verify username', () => {
    cy.visit('https://react-redux.realworld.io/#/login');

    // Fill in email and password fields as valid data
    cy.get('input[type="email"]').type('maksimec2177@gmail.com');
    cy.get('input[type="password"]').type('Ufiraf04');

    // Click on Sign In button
    cy.get('button[type="submit"]').click();

    // Assert that the username appears in Site navigation (Header) menu
    cy.get('.nav-link').should('contain', 'andrew228');
  });
});
