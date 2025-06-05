const QuestionService = require('../services/QuestionServise');
const formatResponse = require('../utils/formatResponse');

class QuestionController {
  // * контроллер на получение всех
  static async getAllQuestionsByTheme(req, res) {
    try {
      
      const { themeId } = req.params;
      console.log(themeId)
      const result = await QuestionService.getAllQuestionsByTheme(themeId);
      res.status(200).json(formatResponse(200, 'Все вопросы по темам', result));
    } catch (error) {
      console.log(error);
      res
        .status(401)
        .json(
          formatResponse(401, 'У тебя нет прав на получение тем', error.message)
        );
    }
  }
  // * второй метод
  static async getAllQuestionsByThemeAndId(req, res) {
    try {
      const { themeId } = req.params;
      const { id } = req.params;
      const result = await QuestionService.getAllQuestionsByThemeAndId(themeId, id);
      res.status(200).json(formatResponse(200, 'Все вопросы по темам', result));
    } catch (error) {
      console.log(error);
      res
        .status(401)
        .json(
          formatResponse(401, 'У тебя нет прав на получение тем', error.message)
        );
    }
  }
}

module.exports = QuestionController;
