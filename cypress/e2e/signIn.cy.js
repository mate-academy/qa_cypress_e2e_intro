
describe('Sign In page', () => {
  const username = 'Olenaqa';
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.get(':nth-child(2) > .nav-link').click();

    cy.get(':nth-child(1) > .form-control').type('wedilo2989@lukaat.com');
    cy.get(':nth-child(2) > .form-control').type('4V6VyG4b3u');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain', username);
  });
});
