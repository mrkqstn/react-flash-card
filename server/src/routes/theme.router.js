const router = require('express').Router()
// const path = require('path')
const ThemeController = require('../controllers/Theme.controller')

router.get('/', ThemeController.getAll);

module.exports = router