const AnswerService = require("../services/Answer.Service");
const { formatResponse } = require('../utils/formatResponse')


class AnswerController {
  // * контроллер на получение всех
  static async getAllAnswers(req, res) {
    try {
        const { id } = req.params
      const result = await AnswerService.getAllAnswersWithoutTrue(id)
      res.status(200).json(formatResponse({
        statusCode: 200, message: 'Все ответы',
        data: result
      }))
    } catch (error) {
      console.log(error)
      res.status(401).json(formatResponse({
        statusCode: 401, message: 'У тебя нет прав',
        error: error.message
      }))
    }
  }
  static async fullAnswers(req, res) {
    try {
        const { id } = req.params
      const result = await AnswerService.getAllAnswers(id)
      res.status(200).json(formatResponse({
        statusCode: 200, message: 'Все ответы',
        data: result
      }))
    } catch (error) {
      console.log(error)
      res.status(401).json(formatResponse({
        statusCode: 401, message: 'У тебя нет прав',
        error: error.message
      }))
    }
  }
}

  module.exports = AnswerController