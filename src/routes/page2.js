const express = require('express')
const router = express.Router()

const page2Controller = require('../app/controllers/Page2Controller')

router.get('/:slug', page2Controller.show)
router.get('/', page2Controller.page2)

module.exports = router
