/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/#/login')
  });

  it('should provide an ability to log in', () => {
    const email = 'testUser1234!@mail.com'
    const userName = 'Tyler_Durden'
    const password = 'Test12345!@';
    
    cy.get('[placeholder="Email"]')
      .type(email);

    cy.get('[placeholder="Password"]')
      .type(password);

    cy.contains('.btn', 'Sign in')
      .click();

    cy.get(':nth-child(4) > .nav-link')
      .should('contain.text', `${userName}`)
  });
});
