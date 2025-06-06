const router = require('express').Router(); //* получаем экземпляр роутинга из библиотеки
const formatResponse = require('../utils/formatResponse'); //* подтягиваем утилиту для унификации ответа по 404
const themeRouter = require('./theme.router');
const questionRouter = require('./questionRouter');
const answerRouter = require('./answerRouter');
const gameRouter = require('./gameRouter');


router.use('/answers', answerRouter);
router.use('/themes', themeRouter);
router.use('/games', gameRouter);
router.use('/questions', questionRouter);


router.use((req, res) => {
  res.status(404).json(formatResponse(404, 'Not found'));
});

module.exports = router;
