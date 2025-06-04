// cypress/e2e/signIn.cy.js

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const timestamp = Date.now();
    const username = `user${timestamp}`;
    const email = `${username}@hotmail.com`;
    const password = 'Test1234!';

    // Clear cookies and local storage
    cy.clearCookies();
    cy.clearLocalStorage();

    // Create user via API
    cy.request({
      method: 'POST',
      url: 'https://conduit.mate.academy/api/users',
      body: {
        user: {
          username,
          email,
          password
        }
      }
    }).then((response) => {
      expect(response.status).to.eq(200);

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(6000);

      // Visit the login page
      cy.visit('https://conduit.mate.academy/user/login');
      cy.url().should('include', '/login');

      // Fill in email and password
      cy.get('input[type="email"]').type(email);
      cy.get('input[type="password"]').type(password);

      // Submit the login form
      cy.get('button[type="submit"]').click();

      // Check if the user's name appears in the navigation bar
      cy.get('nav', { timeout: 10000 }).should('contain', username);
    });
  });
});
