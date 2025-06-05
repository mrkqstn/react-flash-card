'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Темы
    await queryInterface.bulkInsert('Themes', [
      { theme_name: 'География' },
      { theme_name: 'Литература' },
      { theme_name: 'Технологии' }
    ]);

    // Вопросы
    await queryInterface.bulkInsert('Questions', [
      // География (theme_id: 1)
      { question: 'Столица Австралии?', theme_id: 1 },
      { question: 'Самая длинная река в мире?', theme_id: 1 },
      { question: 'На каком материке находится Египет?', theme_id: 1 },
      { question: 'Какая страна имеет наибольшее население?', theme_id: 1 },

      // Литература (theme_id: 2)
      { question: 'Кто написал "Преступление и наказание"?', theme_id: 2 },
      { question: 'Автор "Войны и мира"?', theme_id: 2 },
      { question: 'Главный герой "Гамлета"?', theme_id: 2 },
      { question: 'Кто написал "Евгений Онегин"?', theme_id: 2 },

      // Технологии (theme_id: 3)
      { question: 'Какой язык используется для создания веб-страниц?', theme_id: 3 },
      { question: 'Кто создал Microsoft?', theme_id: 3 },
      { question: 'Что такое AI?', theme_id: 3 },
      { question: 'Самая популярная мобильная ОС?', theme_id: 3 }
    ]);

    // Ответы
    await queryInterface.bulkInsert('Answers', [
      // Вопрос 1
      { var_on_answer: 1, question_id: 1, right: false },
      { var_on_answer: 2, question_id: 1, right: true },
      { var_on_answer: 3, question_id: 1, right: false },
      { var_on_answer: 4, question_id: 1, right: false },

      // Вопрос 2
      { var_on_answer: 1, question_id: 2, right: false },
      { var_on_answer: 2, question_id: 2, right: true },
      { var_on_answer: 3, question_id: 2, right: false },
      { var_on_answer: 4, question_id: 2, right: false },

      // Вопрос 3
      { var_on_answer: 1, question_id: 3, right: false },
      { var_on_answer: 2, question_id: 3, right: true },
      { var_on_answer: 3, question_id: 3, right: false },
      { var_on_answer: 4, question_id: 3, right: false },

      // Вопрос 4
      { var_on_answer: 1, question_id: 4, right: false },
      { var_on_answer: 2, question_id: 4, right: false },
      { var_on_answer: 3, question_id: 4, right: true },
      { var_on_answer: 4, question_id: 4, right: false },

      // Вопрос 5
      { var_on_answer: 1, question_id: 5, right: false },
      { var_on_answer: 2, question_id: 5, right: false },
      { var_on_answer: 3, question_id: 5, right: true },
      { var_on_answer: 4, question_id: 5, right: false },

      // Вопрос 6
      { var_on_answer: 1, question_id: 6, right: false },
      { var_on_answer: 2, question_id: 6, right: true },
      { var_on_answer: 3, question_id: 6, right: false },
      { var_on_answer: 4, question_id: 6, right: false },

      // Вопрос 7
      { var_on_answer: 1, question_id: 7, right: false },
      { var_on_answer: 2, question_id: 7, right: true },
      { var_on_answer: 3, question_id: 7, right: false },
      { var_on_answer: 4, question_id: 7, right: false },

      // Вопрос 8
      { var_on_answer: 1, question_id: 8, right: true },
      { var_on_answer: 2, question_id: 8, right: false },
      { var_on_answer: 3, question_id: 8, right: false },
      { var_on_answer: 4, question_id: 8, right: false },

      // Вопрос 9
      { var_on_answer: 1, question_id: 9, right: false },
      { var_on_answer: 2, question_id: 9, right: true },
      { var_on_answer: 3, question_id: 9, right: false },
      { var_on_answer: 4, question_id: 9, right: false },

      // Вопрос 10
      { var_on_answer: 1, question_id: 10, right: false },
      { var_on_answer: 2, question_id: 10, right: false },
      { var_on_answer: 3, question_id: 10, right: true },
      { var_on_answer: 4, question_id: 10, right: false },

      // Вопрос 11
      { var_on_answer: 1, question_id: 11, right: false },
      { var_on_answer: 2, question_id: 11, right: false },
      { var_on_answer: 3, question_id: 11, right: true },
      { var_on_answer: 4, question_id: 11, right: false },

      // Вопрос 12
      { var_on_answer: 1, question_id: 12, right: false },
      { var_on_answer: 2, question_id: 12, right: false },
      { var_on_answer: 3, question_id: 12, right: false },
      { var_on_answer: 4, question_id: 12, right: true }
    ]);

    // Игры
    await queryInterface.bulkInsert('Games', [
      { user_name: 'Иван', theme_id: 1, score: 3 },
      { user_name: 'Анна', theme_id: 2, score: 4 },
      { user_name: 'Максим', theme_id: 3, score: 2 },
      { user_name: 'Ольга', theme_id: 1, score: 1 },
      { user_name: 'Дмитрий', theme_id: 2, score: 4 }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games', null, {});
    await queryInterface.bulkDelete('Answers', null, {});
    await queryInterface.bulkDelete('Questions', null, {});
    await queryInterface.bulkDelete('Themes', null, {});
  }
};
