const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
  // [GET] /
  index(req, res, next) {
    Course.find()
      .then((courses) => {
        res.render('home', {
          courses: mutipleMongooseToObject(courses),
        })
      })
      .catch(next)

    //res.render('home')
  }

  // [GET] /search
  search(req, res) {
    res.render('search')
  }

  // [GET] /page2
  page2(req, res) {
    res.render('page2')
  }
}

module.exports = new SiteController()
