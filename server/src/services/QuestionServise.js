const QuestionService = require('../services/QuestionServise')
const { formatResponse } = require('../utils/formatResponse')

class QuestionController {
  // * контроллер на получение всех
  static async getAllQuestionsByTheme(req, res) {
    try {
      const { themeId } = req.params 
      const result = await QuestionService.getAllQuestionsByTheme(themeId)
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

  static async getAllQuestionsByThemeAndId (req, res) {
    try {
      const { themeId } = req.params 
      const { id } = req.params 
      const result = await QuestionService.getAllQuestionsByTheme(themeId, id)
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