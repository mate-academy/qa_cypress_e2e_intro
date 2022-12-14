describe('Sign in page', () => {
  it('should login user with registered credentials', () => {
    cy.visit('https://react-redux.realworld.io')

    cy.get(':nth-child(2) > .nav-link').click()

    cy.get(':nth-child(1) > .form-control').type('sam123@gmail.com')

    cy.get(':nth-child(2) > .form-control').type('samanta123')

    cy.get('.btn').click()

    cy.wait(3000)

    cy.get(':nth-child(4) > .nav-link')
  })
})
