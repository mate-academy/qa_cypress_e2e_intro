
describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit("https://react-redux.realworld.io/#/?_k=pb3kp8")
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get(':nth-child(1) > .form-control').type("maxbeshlega228@gmail.com")
    cy.get(':nth-child(2) > .form-control').type("max2001")
    cy.get('.btn').click()
    cy.get(':nth-child(4) > .nav-link').should('contain.text', 'max2001')
  });
});
