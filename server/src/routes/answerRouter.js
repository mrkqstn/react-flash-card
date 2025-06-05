const router = require('express').Router()
const AnswerController = require('../controllers/Answer.Controller');


router.get('/unright/:id', AnswerController.getAllAnswers);
router.get('/right/:id', AnswerController.fullAnswers)

