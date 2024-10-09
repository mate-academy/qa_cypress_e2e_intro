/// <reference types="cypress" />

describe('Sign In page', () => {
  const user = {
    firstName: 'Piotr',
    email: 'piotrwandas99@gmail.com',
    emailInvalid: 'piotrwandas99gmail.com',
    password: 'Haslo123456!'
  }
  const product = {
    name: 'Koszulka',
    sku: '8470j-00x',
    size: 'S'
  }

  const homePageUrl = 'https://www.sinsay.com/pl/pl'
  beforeEach(() => {
    cy.visit('/')
  })

  it('should provide an ability to log in', () => {

    cy.get('#cookiebotDialogOkButton').click()
    cy.get('[data-selen="login-email"]').type(user.email)
    cy.get('[data-selen="login-password"]').type(user.password)
    cy.get('[data-selen="login-submit"]').click()

    cy.url().should('include', homePageUrl)
    cy.get('[data-testid="account-info-logged-true"]').should('contain', user.firstName)

  });

  it('should not provide an ability to log in with invalid password', () => {

    cy.get('#cookiebotDialogOkButton').click()
    cy.get('[data-selen="login-email"]').type(user.email)
    cy.get('[data-selen="login-password"]').type(user.password + '1')
    cy.get('[data-selen="login-submit"]').click()

    cy.get('#loginRegisterRoot').should('contain', 'Niepoprawny login i/lub hasło.')

  });

  it('should not provide an ability to log in with invalid email', () => {

    cy.get('#cookiebotDialogOkButton').click()
    cy.get('[data-selen="login-email"]').type(user.emailInvalid)
    cy.get('[data-selen="login-password"]').type(user.password)
    cy.get('[data-selen="login-submit"]').click()

    cy.get('#loginRegisterRoot').should('contain', 'Wprowadź poprawne znaki')

  });

  it.only("should proviede an ability to search for the product, add product to cart and delete product from a cart", () => {
    cy.login()
    cy.get('#cookiebotDialogOkButton').click()
    cy.visit("/checkout/cart/")
    cy.get("body").then(($body) => {
      if ($body.find('[data-selen="empty-cart"]').length === 0) {
        if ($body.find('[data-selen="product-remove').length !== 0) {
          cy.get('[data-selen="product-remove"]').click()
        }
      }
    })
    cy.get('[data-testid="search-header"]').click()
    cy.get('div[data-testid="search-input"]').type(product.sku)

    cy.get('.ds-text ds-text-variant__header ds-text-size__s AlgoliaProducts-module__algolia-query-header AlgoliaProducts-module__desktop-variant')
      .contains(product.sku)
      .should("be.visible")

    cy.get(`.ds-text ds-text-variant__paragraph ds-text-size__m h2`).contains(product.name).click()
    cy.contains('[data-testid="product-size-group"]', product.size).click()
    cy.get('[data-testid="add-to-cart-button"]').click()
    cy.get('[data-testid="cart-confirmation-title"]').should("contain", " Produkt został dodany do koszyka")
    cy.get('[data-testid+"cart-confirmation-close]').click()

    cy.visit("/checkout/cart/")
    cy.get('.product-list__RemoveText-mh8fks-7 fJAyEY').click()
    cy.get('[data-selen="empty-cart"]').should("be.visible")

  })


});
