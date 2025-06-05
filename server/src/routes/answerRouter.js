const answerRouter = require('express').Router()
const AnswerController = require('../controllers/Answer.Controller');


answerRouter.get('/:id/unright', AnswerController.getAllAnswers);
answerRouter.get('/:id/right', AnswerController.fullAnswers)

module.exports = answerRouter;