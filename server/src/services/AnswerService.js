const { Answer } = require('../../db/models');
class AnswerService {
  static async getAllAnswers(question) {
    return await Answer.findAll({where: {question_id: question}});
  }
}
module.exports = AnswerService;