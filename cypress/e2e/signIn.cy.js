/* eslint-disable max-len */
/// <reference types="cypress" />

describe('Авторизация в приложении RealWorld (устойчивая версия)', () => {
  const email = 'ваш_email@example.com'; // замените на рабочий email
  const password = 'ваш_пароль'; // замените на рабочий пароль
  const username = 'ВашеИмяПользователя'; // имя пользователя после входа

  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io');
  });

  it('Вход в приложение с проверкой URL и API', () => {
    // Переходим на страницу "Sign in"
    cy.contains('Sign in', { timeout: 10000 }).should('be.visible').click();
    cy.url({ timeout: 10000 }).should('include', '/login');

    // Перехватываем запрос на авторизацию
    cy.intercept('POST', '**/api/users/login').as('loginRequest');

    // Заполняем форму входа
    cy.get('input[type="email"]', { timeout: 10000 }).should('be.visible').type(email);
    cy.get('input[type="password"]', { timeout: 10000 }).should('be.visible').type(password);

    // Нажимаем кнопку "Sign in"
    cy.get('button[type="submit"]', { timeout: 10000 }).should('be.enabled').click();

    // Ждём ответ API и проверяем успешный статус
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

    // Проверяем URL после успешного входа
    cy.url({ timeout: 10000 }).should('eq', 'https://react-redux.realworld.io/');

    // Проверяем, что имя пользователя отображается в навигации
    cy.get('nav', { timeout: 10000 })
      .contains(username)
      .should('be.visible');
  });
});
