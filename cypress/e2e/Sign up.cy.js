/// <reference types="cypress" />
/// <reference types="../support" />

describe('Sign up page', () => {
  beforeEach(() => {
    cy.visit('#/register');
  });

  it('should have title Sign Up', () => {
    cy.get('h1')
      .should('have.text', 'Sign Up');
  });

  it('should have form', () => {
    cy.get('form')
      .should('exist');
  });

  it('should have Username, Email and Password input fields', () => {
    cy.get('form')
      .within(() => {
        cy.get('[placeholder="Username"]')
          .should('exist');
        cy.get('[type="email"]')
          .should('exist');
        cy.get('[type="password"]')
          .should('exist');
      })
  });

  it('should accept correct new user data and register user', () => {
    cy.registerNewUserWithForm()
      .then(user => {
        cy.location()
          .should(loc => {
            const hashUrl = loc.hash.split('?')[0];

            expect(hashUrl).equals('#/');
          })
          .get('ul.navbar-nav')
          .find('a.nav-link')
          .contains(user.username)
          .should('exist');
      })
  });

  it('should fail to register new user with same email', () => {
    cy.registerNewUserWithRequest()
      .then(existedUser => {
        cy.registerNewUserWithForm({ email: existedUser.email})
        .then(user => {
          cy.location()
            .should(loc => {
              const hashUrl = loc.hash.split('?')[0];
  
              expect(hashUrl).equals('#/register');
            })
            .get('ul.error-messages')
            .should('be.visible');
        })
      })
  });
});
