/// <reference types="cypress" />

describe('Sign up', () => {
  beforeEach(() => {
    cy.visit('/#/register?_k=cize6l')
  });

  it('should allow to register a new user', () => {
   const randomNumber = Math.random().toString().slice(2)
   const userName = `test_user-${randomNumber}`;

   cy.get('[placeholder="Username"]')
     .type ( userName);

   cy.get('[placeholder="Email"]')
   .type (`${userName}@mail.com`);

   cy.get('[placeholder="Password"]')
   .type ('Test1234qwerty');

   cy.contains ('.btn', 'Sign in')
     .click();
})
})