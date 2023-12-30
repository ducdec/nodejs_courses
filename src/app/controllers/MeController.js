const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { response } = require('express')

class MeController {
  // [GET] me/stored/courses
  storeCourses(req, res, next) {
    let courseQuery = Course.find({})

    const sortObj = {}
    if (req.query.hasOwnProperty('_sort')) {
      sortObj[req.query.column] = req.query.type // [name] = 'desc
      courseQuery = courseQuery.sort(sortObj) // Sử dụng đối tượng sắp xếp trong sort
    }

    Promise.all([
      courseQuery,
      Course.countDocumentsWithDeleted({ deleted: true }),
    ])
      .then(([courses, deletedCount]) =>
        res.render('me/stored-courses', {
          courses: mutipleMongooseToObject(courses),
          deletedCount,
        }),
      )
      .catch(next)
  }

  // [GET] me/trash/courses
  trashCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true })
      .then((courses) =>
        res.render('me/trash-courses', {
          courses: mutipleMongooseToObject(courses),
        }),
      )
      .catch(next)
  }
}

module.exports = new MeController()
