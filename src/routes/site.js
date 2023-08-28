const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

//router.get('/page2', siteController.page2)
//router.get('/course', siteController.show)

router.get('/search', siteController.search)
router.get('/', siteController.index)

module.exports = router
