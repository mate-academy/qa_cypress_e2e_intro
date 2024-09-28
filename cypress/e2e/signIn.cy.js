/// <reference types="cypress" />

const getRandomEmail = () => {
  const firstPart = Math.trunc(Math.random() * 10e15);

  return `usertest.${firstPart}@mail.test`;
};

describe('Sign In page', () => {
  let emailForLogin = '';

  before(() => {
    cy.visit('/login');

    emailForLogin = getRandomEmail();
  });

  it('should provide an ability to log in', () => {
    cy.get('h1').should('contain.text', 'Sign In');

    cy.get('[placeholder=Email]')
      .type(emailForLogin);

    cy.get('[placeholder=Password]')
      .type('User_test123');

    cy.get('.btn').should('exist').click();

    cy.contains('a', emailForLogin);
  });
});
