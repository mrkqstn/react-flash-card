const { Answer } = require('../../db/models');

class AnswerService {
  static async getAllAnswersWithoutTrue(question) {
    const answer = await Answer.findAll({where: {question_id: question}});
    const result = answer.map((el) => (!el.right))
    return result
  };
    const answer = await Answer.findAll({ where: { question_id: question } });

    const result = answer.map((el) => {
      const { id, var_on_answer, question_id } = el.dataValues;
      return { id, var_on_answer, question_id };
    });
    return result;
  }
  static async getAllAnswers(question) {
    return await Answer.findAll({ where: { question_id: question } });
  }

  
}
module.exports = AnswerService;
