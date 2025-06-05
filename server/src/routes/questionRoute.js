const router = require('express').Router()

const path = require('path')

const { checkBody, checkId } = require('../middlewares/checkBody')

const QuestionController = require('../controllers/QuestionController')

router.get('/register', (req, res) => {
  console.log(req.query)
  res.status(200).sendFile(path.resolve(__dirname, '../registerForm.html'))
})

router
  .get('/', UserController.getAll)
  .post('/register', checkBody, UserController.register)
  .delete('/:id', checkId, UserController.delete)
  .get('/:id', UserController.getOne)
  .put('/:id', UserController.update)

module.exports = router