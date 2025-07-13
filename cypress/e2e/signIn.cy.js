const generateUser = require('../support/generateUser');

describe('Sign in page - with API Mocking', () => {
  let userCredentials; // Змінна для зберігання згенерованих облікових даних

  beforeEach(() => {
    // Генеруємо нового користувача для кожного тесту
    userCredentials = generateUser();

    // 1. Мокуємо запит на вхід (POST /api/users/login)
    // Змінюємо URL для перехоплення на conduit.productionready.io
    // Переконуємося, що структура body максимально повна
    cy.intercept('POST', 'https://conduit.productionready.io/api/users/login', {
      statusCode: 200, // Імітуємо успішний статус
      body: {
        user: {
          email: userCredentials.email,
          token: 'mock-jwt-token-for-testing', // Мокований токен
          username: userCredentials.username,
          bio: '', // Часто bio є порожнім рядком, а не null
          image: 'https://api.realworld.io/images/smiley-cy.png',
          // Додаємо тестове зображення
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      }
    }).as('userLogin');

    // 2. Мокуємо запити, які додаток робить після входу на головній сторінці
    // Це важливо, щоб уникнути помилок, якщо додаток очікує дані для цих запитів
    cy.intercept('GET', 'https://conduit.productionready.io/api/tags', {
      statusCode: 200,
      body: {
        tags: ['cypress', 'testing', 'mocking', 'frontend']
      }
    }).as('getTags');

    cy.intercept(
      'GET', 'https://conduit.productionready.io/api/articles/feed?*', {
        statusCode: 200,
        body: {
          articles: [], // Порожній масив статей, якщо не потрібно їх відображати
          articlesCount: 0
        }
      }).as('getArticlesFeed');

    // Цей запит /api/articles?* не завжди робиться після входу, тому ми його приберемо з cy.wait()
    cy.intercept('GET', 'https://conduit.productionready.io/api/articles?*', {
      statusCode: 200,
      body: {
        articles: [], // Порожній масив статей
        articlesCount: 0
      }
    }).as('getArticles');

    // 3. Відвідуємо сторінку входу основного додатку
    cy.visit('https://react-redux.realworld.io/#/login');

    // 4. Чекаємо, поки з'явиться форма входу
    cy.get('form', { timeout: 10000 }).should('be.visible');
  });

  it('should provide an ability to log in (mocked)', () => {
    // 5. Заповнюємо поля email та password згенерованими даними
    cy.get('[placeholder="Email"]').type(userCredentials.email);
    cy.get('[placeholder="Password"]').type(userCredentials.password);

    // 6. Клікаємо кнопку входу
    cy.contains('button', 'Sign in').click();

    // 7. Чекаємо, поки мокований запит на вхід буде виконаний
    cy.wait('@userLogin');

    // 8. Чекаємо, поки завантажаться інші дані на головній сторінці
    // Прибираємо '@getArticles' з очікування, оскільки він не завжди викликається
    cy.wait(['@getTags', '@getArticlesFeed']);

    // 9. Перевіряємо, що ім'я користувача відображається у хедері
    cy.contains('.nav-link', userCredentials.username, { timeout: 10000 })
      .should('be.visible');
  });

  // Обробник для неперехоплених винятків видалено, оскільки тест вже стабільний
  // і console.error не потрібен для фінального коду.
});
