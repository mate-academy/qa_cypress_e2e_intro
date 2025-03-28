/// <reference types='cypress' />

describe('Sign In page', () => {
  const username = 'test11223344';
  const email = 'test11223344@test.test';
  const password = '1234Qwer';

  it('should provide an ability to log in', () => {
    cy.visit('/user/login');

    cy.get('input[type="email"]').type(email);

    cy.get('input[type="password"]').type(password);

    cy.get('button[type="submit"]').contains('Sign in').click();

    cy.get(
      'ul.nav.navbar-nav.pull-xs-right > li:nth-child(4) > a.nav-link'
    ).should('contain.text', username);
  });
});
