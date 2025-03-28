describe('Login Tests', () => {
  it('Should log in with valid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('Should show error with invalid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').type('invalidUser');
    cy.get('#password').type('invalidPassword');
    cy.get('button[type="submit"]').click();

    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('Should log out successfully', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.get('.icon-2x.icon-signout').click();

    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
