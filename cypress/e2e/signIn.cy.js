/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'ipsancidun';
  const email = 'depu@mailinator.com';
  const password = 'Pa$$w0rd!';

  it('should provide an ability to log in', () => {
    cy.visit('/user/login');
    cy.get('input[type=\'email\']').type(`${email}`);
    cy.get('input[type=\'password\']').type(`${password}`);
    cy.get('button[type=\'submit\']').click();
    cy.get('a[class=\'nav-link\']').should(
      'contain.text',
      `${username}`
    );
  });
});
