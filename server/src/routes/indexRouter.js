const router = require('express').Router(); //* получаем экземпляр роутинга из библиотеки
const formatResponse = require('../utils/formatResponse'); //* подтягиваем утилиту для унификации ответа по 404
const answer = require("./answerRouter")
// router.use('/posts', postRouter); //* по пути на posts отрабатывает набор из postRouter
router.use('/answers',answer)
//! Обработка всех запросов на несуществующие маршруты (меняем стандартный ответ от express)
router.use((req, res) => {
  res.status(404).json(formatResponse(404, 'Not found'));
});

module.exports = router;
