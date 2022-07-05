/// <reference types="cypress" />

describe('Sign in', () => {
  beforeEach(() => {
    cy.visit('/#/login?_k=yr3psg')
  });

  it('should allow to sign in', () => {
   const randomNumber = Math.random().toString().slice(2)
   const userName = `test_user-${randomNumber}`;

   cy.get('[placeholder="Email"]')
   .type (`${userName}@mail.com`);

   cy.get('[placeholder="Password"]')
   .type ('Test1234qwerty');

   cy.contains ('.btn', 'Sign in')
     .click();

})
})