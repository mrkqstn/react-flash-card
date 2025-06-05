const router = require('express').Router()

const QuestionController = require('../controllers/QuestionController')
// роуты

router
  .get('/:themeId',  QuestionController.getAllQuestionsByTheme)
  .get('/:themeId/:id',  QuestionController.getAllQuestionsByThemeAndId)

module.exports = router