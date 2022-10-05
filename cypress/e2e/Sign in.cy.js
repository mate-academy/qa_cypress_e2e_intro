/// <reference types="cypress" />

describe('Sign in page', () => {
  beforeEach(() => {
    cy.visit('/#login');
  });

  it('should have title Sign In', () => {
    cy.get('h1')
      .should('have.text', 'Sign In');
  });

  it('should have form', () => {
    cy.get('form')
      .should('exist');
  });

  it('should have Email and Password input fields', () => {
    cy.get('form')
      .within(() => {
        cy.get('[type="email"]')
          .should('exist');
        cy.get('[type="password"]')
          .should('exist');
      })
  });

  it('should allow to login for registered user', () => {
    cy.registerNewUserWithRequest()
      .then(registeredUser => {
        cy.get('form')
          .within(() => {
            cy.get('[type="email"]')
              .type(registeredUser.email)
              .get('[type="password"]')
              .type(registeredUser.password)
              .type('{enter}')
          })
          .location()
          .should(loc => {
            const hashUrl = loc.hash.split('?')[0];

            expect(hashUrl).equals('#/');
          })
          .get('ul.navbar-nav')
          .find('a.nav-link')
          .contains(registeredUser.username)
          .should('exist');
      })
  });

  it('should disallow to login for non-registered user', () => {
    cy.generateFakeUser().then(fakeUser => {
      cy.get('form')
        .within(() => {
          cy.get('[type="email"]')
            .type(fakeUser.email)
            .get('[type="password"]')
            .type(fakeUser.password)
            .type('{enter}')
        })
        .location()
        .should(loc => {
          const hashUrl = loc.hash.split('?')[0];

          expect(hashUrl).equals('#/login');
        })
        .get('ul.error-messages')
        .should('be.visible');
    });
  });
});
