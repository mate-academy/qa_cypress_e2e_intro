/// <reference types="cypress" />

// const { generateUser } = require('../support/generate');

describe('Visit "Sign in" page', () => {
  beforeEach(() => {
  cy.visit('https://react-redux.realworld.io/#/login') //перевірка що користувач перейшов до зазначеної вебадреси
});

  it('should allow logged in user', () => { //тест на введення в поле електронної адреси відповідно електронну пошту вже зареєстрованого юзера   
    // const user = generateUser();

    cy.get('[placeholder="Email"]')
      .type('test.user.qa.123@gmail.com')

    cy.get('[placeholder="Password"]') //тест на введення в поле пароль відповідно паролю вже зареєстрованого юзера
      .type('Qwerty123!')

    cy.contains('.btn', 'Sign in') //тест на натискання кнопки реєстрації
    .click();

    cy.get(':nth-child(4) > .nav-link') //перевірка що на сайті присутня назва користувача яким ми залогінилися
      .should('contain.text', 'test.user.qa.123')
  });
});