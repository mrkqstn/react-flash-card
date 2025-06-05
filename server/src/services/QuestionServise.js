const { Question } = require("../../db/models");

class QuestionService {
  // * получение всех вопросов по теме
  static async getAllQuestionsByTheme(themeId) {
    return await Question.findAll({ where: { theme_id: themeId } });
  }

  static async getAllQuestionsByThemeAndId(themeId, id) {
    return await Question.findAll({ where: { theme_id: themeId, id: id } });
  }
}

module.exports = QuestionService;
