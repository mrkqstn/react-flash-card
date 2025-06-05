const QuestionService = require('../services/QuestionServise')
const { formatResponse } = require('../utils/formatResponse')

class QuestionController {
  // * контроллер на получение всех
  static async getAllQuestion(req, res) {
    try {
      const result = await QuestionService.getAllQuestionsByTheme()
      res.status(200).json(formatResponse({
        statusCode: 200, message: 'Все вопросы по темам',
        data: result
      }))
    } catch (error) {
      console.log(error)
      res.status(401).json(formatResponse({
        statusCode: 401, message: 'У тебя нет прав на получение тем',
        error: error.message
      }))
    }
  }
}

module.exports = QuestionController