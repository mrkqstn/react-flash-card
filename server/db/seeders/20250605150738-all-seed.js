'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    
    await queryInterface.bulkInsert('Themes', [
      { 
        theme_name: 'География',
        createdAt: now,
        updatedAt: now
      },
      { 
        theme_name: 'Литература',
        createdAt: now,
        updatedAt: now
      },
      { 
        theme_name: 'Технологии',
        createdAt: now,
        updatedAt: now
      }
    ], {});

    await queryInterface.bulkInsert('Questions', [
      { 
        question: 'Столица Австралии?', 
        theme_id: 1,
        createdAt: now,
        updatedAt: now
      },
      { 
        question: 'Самая длинная река в мире?', 
        theme_id: 1,
        createdAt: now,
        updatedAt: now
      },
      { 
        question: 'На каком материке находится Египет?', 
        theme_id: 1,
        createdAt: now,
        updatedAt: now
      },
      { 
        question: 'Какая страна имеет наибольшее население?', 
        theme_id: 1,
        createdAt: now,
        updatedAt: now
      },

      { 
        question: 'Кто написал "Преступление и наказание"?', 
        theme_id: 2,
        createdAt: now,
        updatedAt: now
      },
      { 
        question: 'Автор "Войны и мира"?', 
        theme_id: 2,
        createdAt: now,
        updatedAt: now
      },
      { 
        question: 'Кто написал "Евгений Онегин"?', 
        theme_id: 2,
        createdAt: now,
        updatedAt: now
      },

      { 
        question: 'Основной язык разметки для веб-страниц?', 
        theme_id: 3,
        createdAt: now,
        updatedAt: now
      },
      { 
        question: 'Кто создал Microsoft?', 
        theme_id: 3,
        createdAt: now,
        updatedAt: now
      },
      { 
        question: 'React JS – это...', 
        theme_id: 3,
        createdAt: now,
        updatedAt: now
      },
      { 
        question: 'От какого класса идет наследование всех компонентов?', 
        theme_id: 3,
        createdAt: now,
        updatedAt: now
      },
    ], {});

    await queryInterface.bulkInsert('Answers', [
// 'Столица Австралии?', 
      { 
        var_on_answer: 'Сидней', 
        question_id: 1, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Канберра', 
        question_id: 1, 
        right: true,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Мельбурн', 
        question_id: 1, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Брисбен', 
        question_id: 1, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
// 'Самая длинная река в мире?', 
      { 
        var_on_answer: 'Нил', 
        question_id: 2, 
        right: true,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Амазонка', 
        question_id: 2, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Янцзы', 
        question_id: 2, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Миссисипи', 
        question_id: 2, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
// 'На каком материке находится Египет?', 
      { 
        var_on_answer: 'Африка', 
        question_id: 3, 
        right: true,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Евразия', 
        question_id: 3, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Южная Америка', 
        question_id: 3, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Северная Америка', 
        question_id: 3, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
// 'Какая страна имеет наибольшее население?', 

      { 
        var_on_answer: 'Россия', 
        question_id: 4, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Китай', 
        question_id: 4, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Индия', 
        question_id: 4, 
        right: true,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Великобритания', 
        question_id: 4, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
//  'Кто написал "Преступление и наказание"?',

      { 
        var_on_answer: 'Булгаков', 
        question_id: 5, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Пушкин', 
        question_id: 5, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Достоевский', 
        question_id: 5, 
        right: true,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Лермонтов', 
        question_id: 5, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
// 'Автор "Войны и мира"?', 
      { 
        var_on_answer: 'Толстой', 
        question_id: 6, 
        right: true,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Булгаков', 
        question_id: 6, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Пушкин', 
        question_id: 6, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Блок', 
        question_id: 6, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
// 'Кто написал "Евгений Онегин"?', 

      { 
        var_on_answer: 'Есенин', 
        question_id: 7, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Блок', 
        question_id: 7, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Толстой', 
        question_id: 7, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Пушкин', 
        question_id: 7, 
        right: true,
        createdAt: now,
        updatedAt: now
      },

// 'Основной язык разметки для веб-страниц?', 
      { 
        var_on_answer: 'HTML', 
        question_id: 8, 
        right: true,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'С++', 
        question_id: 8, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'PHP', 
        question_id: 8, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Python', 
        question_id: 8, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
// 'Кто создал Microsoft?', 

      { 
        var_on_answer: 'Владимир Путин', 
        question_id: 9, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Илон Маск', 
        question_id: 9, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Дональд Трамп', 
        question_id: 9, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Билл Гейтс', 
        question_id: 9, 
        right: true,
        createdAt: now,
        updatedAt: now
      },

      // React JS – это...

       { 
        var_on_answer: 'Back-end платформа', 
        question_id: 10, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'MVC-фреймворк', 
        question_id: 10, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'фреймворк', 
        question_id: 10, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'JavaScript библиотека', 
        question_id: 10, 
        right: true,
        createdAt: now,
        updatedAt: now
      },

      // От какого класса идет наследование всех компонентов?

      { 
        var_on_answer: 'ComponentReact', 
        question_id: 11, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'ReactComponent', 
        question_id: 11, 
        right: false,
        createdAt: now, 
        updatedAt: now
      },
      { 
        var_on_answer: 'ReactJS.Component', 
        question_id: 11, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'React.Component', 
        question_id: 11, 
        right: true,
        createdAt: now,
        updatedAt: now
      }

    ], {});

    await queryInterface.bulkInsert('Games', [
      { 
        user_name: 'Иван', 
        theme_id: 1, 
        score: 3,
        createdAt: now,
        updatedAt: now
      },
      { 
        user_name: 'Анна', 
        theme_id: 2, 
        score: 4,
        createdAt: now,
        updatedAt: now
      },
      { 
        user_name: 'Максим', 
        theme_id: 3, 
        score: 2,
        createdAt: now,
        updatedAt: now
      },
      { 
        user_name: 'Ольга', 
        theme_id: 1, 
        score: 1,
        createdAt: now,
        updatedAt: now
      },
      { 
        user_name: 'Дмитрий', 
        theme_id: 2, 
        score: 4,
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Games', null, {});
    await queryInterface.bulkDelete('Answers', null, {});
    await queryInterface.bulkDelete('Questions', null, {});
    await queryInterface.bulkDelete('Themes', null, {});
  }
};
