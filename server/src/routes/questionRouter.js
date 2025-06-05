const router = require('express').Router()

const QuestionController = require('../controllers/QuestionController')


router
  .get('/questions/:theme_id',  QuestionController.getAllQuestionsByTheme)
  .get('/questions/:id',  QuestionController.getAllQuestionsByThemeAndId)

module.exports = router