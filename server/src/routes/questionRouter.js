const router = require('express').Router()

const QuestionController = require('../controllers/QuestionController')


router
  .get('/:theme_id/:id',  QuestionController.getAllQuestionsByTheme)
  .get('/:id',  QuestionController.getAllQuestionsByThemeAndId)

module.exports = router