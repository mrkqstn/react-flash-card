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
        theme_name: 'Что ты знаешь о Денисе Образцове?',
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

      // Вопросы для темы "Что ты знаешь о Денисе Образцове?"
    { 
      question: 'Любимый эмодзи Дениса?', 
      theme_id: 2,
      createdAt: now,
      updatedAt: now
    },
    { 
      question: 'На какой фазе Денис оставался на повтор?', 
      theme_id: 2,
      createdAt: now,
      updatedAt: now
    },
    { 
      question: 'Чем любит заниматься Денис в обеденный перерыв?', 
      theme_id: 2,
      createdAt: now,
      updatedAt: now
    },
    { 
      question: 'После какой фразы Дениса он начинает писать код, но студенты чаще впадают в ступор и теряют связь с реальностью?', 
      theme_id: 2,
      createdAt: now,
      updatedAt: now
    },
    { 
      question: 'Любимый бренд Дениса?', 
      theme_id: 2,
      createdAt: now,
      updatedAt: now
    },
    { 
      question: 'Самая необычная причина неявки студента на экзамен в практике Дениса?', 
      theme_id: 2,
      createdAt: now,
      updatedAt: now
    },
    { 
      question: 'Фанатом какого фреймворка является Денис?', 
      theme_id: 2,
      createdAt: now,
      updatedAt: now
    },
    { 
      question: 'В каком году вышло первое обучающее видео на ютуб с Денисом?', 
      theme_id: 2,
      createdAt: now,
      updatedAt: now
    },
    { 
      question: 'Что, согласно профилю на github, Денису интересно освоить в будущем?', 
      theme_id: 2,
      createdAt: now,
      updatedAt: now
    },
    { 
      question: 'Какой ритуал совершает Денис при выпуске студентов Эльбруса в большой мир', 
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
// Ответы для вопросов о Денисе
    // Вопрос 1: Любимый эмодзи Дениса
    { 
      var_on_answer: 'Сердечко', 
      question_id: 5, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'Огонек', 
      question_id: 5, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'Огурчик', 
      question_id: 5, 
      right: true,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'Котик', 
      question_id: 5, 
      right: false,
      createdAt: now,
      updatedAt: now
    },

    // Вопрос 2: На какой фазе Денис оставался на повтор
    { 
      var_on_answer: 'фаза 1', 
      question_id: 6, 
      right: true,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'фаза 2', 
      question_id: 6, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'фаза 3', 
      question_id: 6, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'о каком повторе идет речь? Он - гений!', 
      question_id: 6, 
      right: false,
      createdAt: now,
      updatedAt: now
    },

    // Вопрос 3: Чем любит заниматься Денис в обеденный перерыв
    { 
      var_on_answer: 'лечь поспать', 
      question_id: 7, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'садится писать статью в Научпоп', 
      question_id: 7, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'покататься на велосипеде', 
      question_id: 7, 
      right: true,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'окунуться с головой в React', 
      question_id: 7, 
      right: false,
      createdAt: now,
      updatedAt: now
    },

    // Вопрос 4: После какой фразы Дениса...
    { 
      var_on_answer: 'сейчас будет интересно!', 
      question_id: 8, 
      right: true,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'готовьтесь!', 
      question_id: 8, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'вот сейчас будет правда тяжело!', 
      question_id: 8, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'не ссыте, разберемся!', 
      question_id: 8, 
      right: false,
      createdAt: now,
      updatedAt: now
    },

    // Вопрос 5: Любимый бренд Дениса
    { 
      var_on_answer: 'Apple', 
      question_id: 9, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'Samsung', 
      question_id: 9, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'Xiaomi', 
      question_id: 9, 
      right: true,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'NoName Сorporation', 
      question_id: 9, 
      right: false,
      createdAt: now,
      updatedAt: now
    },

    // Вопрос 6: Самая необычная причина неявки...
    { 
      var_on_answer: 'получил оффер перед экзаменом от Сбера на 300К', 
      question_id: 10, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'сгорел на промисах, не осталось слез на экзамен', 
      question_id: 10, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'приставы по решению суда демонтировали общедомовой коммутатор обанкротившегося провайдера', 
      question_id: 10, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'поехал(а) рожать', 
      question_id: 10, 
      right: true,
      createdAt: now,
      updatedAt: now
    },

    // Вопрос 7: Фанатом какого фреймворка...
    { 
      var_on_answer: 'Materialize', 
      question_id: 11, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'Bootstrap', 
      question_id: 11, 
      right: true,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'Zimit', 
      question_id: 11, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'Bulma', 
      question_id: 11, 
      right: false,
      createdAt: now,
      updatedAt: now
    },

    // Вопрос 8: В каком году вышло первое обучающее видео...
    { 
      var_on_answer: '2021', 
      question_id: 12, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: '2023', 
      question_id: 12, 
      right: true,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: '2020', 
      question_id: 12, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'не было такого, ютуб заблочен!', 
      question_id: 12, 
      right: false,
      createdAt: now,
      updatedAt: now
    },

    // Вопрос 9: Что, согласно профилю на github...
    { 
      var_on_answer: 'вязание стилем Фриформ', 
      question_id: 13, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'курс по психологии для поддержки эмоционального фона студентов', 
      question_id: 13, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'CSS-фреймворк Tailwind', 
      question_id: 13, 
      right: true,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'выучить Абхазский язык', 
      question_id: 13, 
      right: false,
      createdAt: now,
      updatedAt: now
    },

    // Вопрос 10: Какой ритуал совершает Денис...
    { 
      var_on_answer: 'кричит с балкона "Встречайте"', 
      question_id: 14, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'зажигает благовония', 
      question_id: 14, 
      right: false,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'дудит в трубку', 
      question_id: 14, 
      right: true,
      createdAt: now,
      updatedAt: now
    },
    { 
      var_on_answer: 'приглашает всех выпускников на пицца-пати', 
      question_id: 14, 
      right: false,
      createdAt: now,
      updatedAt: now
    },

// 'Основной язык разметки для веб-страниц?', 
      { 
        var_on_answer: 'HTML', 
        question_id: 15, 
        right: true,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'С++', 
        question_id: 15, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'PHP', 
        question_id: 15, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Python', 
        question_id: 15, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
// 'Кто создал Microsoft?', 

      { 
        var_on_answer: 'Владимир Путин', 
        question_id: 16, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Илон Маск', 
        question_id: 16, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Дональд Трамп', 
        question_id: 16, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'Билл Гейтс', 
        question_id: 16, 
        right: true,
        createdAt: now,
        updatedAt: now
      },

      // React JS – это...

       { 
        var_on_answer: 'Back-end платформа', 
        question_id: 17, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'MVC-фреймворк', 
        question_id: 17, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'фреймворк', 
        question_id: 17, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'JavaScript библиотека', 
        question_id: 17, 
        right: true,
        createdAt: now,
        updatedAt: now
      },

      // От какого класса идет наследование всех компонентов?

      { 
        var_on_answer: 'ComponentReact', 
        question_id: 18, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'ReactComponent', 
        question_id: 18, 
        right: false,
        createdAt: now, 
        updatedAt: now
      },
      { 
        var_on_answer: 'ReactJS.Component', 
        question_id: 18, 
        right: false,
        createdAt: now,
        updatedAt: now
      },
      { 
        var_on_answer: 'React.Component', 
        question_id: 18, 
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
