const Course = require('../models/Course')
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require('../../util/mongoose')

class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', {
          course: mongooseToObject(course),
        })
      })
      .catch(next)
  }

  // [GET] /courses/create
  create(req, res) {
    res.render('courses/create')
  }

  // [POST] /courses/store
  store(req, res, next) {
    //res.json(req.body)
    req.body.image = `https://i.ytimg.com/vi/${req.body.videoID}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBB2M7IXJ2Vy5vqYWTIN6R-qvBPjg`
    const course = new Course(req.body)
    course
      .save()
      .then(() => {
        res.redirect('/me/stored/courses')
      })
      .catch((err) => {
        console.error(err)
        res.status(500).send('An error occurred while saving the course.')
      })
  }

  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id) //lay du lieu theo id
      .then((course) =>
        res.render('courses/edit', {
          course: mongooseToObject(course),
        }),
      )
      .catch(next)
  }

  //[PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body) //update
      .then(() => res.redirect('/me/stored/courses')) //render ve path::
      .catch(next)
  }

  //[DELETE] /courses/:id (Xoa me'm)
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }

  //[DELETE] /courses/:id/force (Xo'a that)
  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }
  //[PATCH] /courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }

  // [POST] /courses/handle-form-action
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case 'delete':
        Course.delete({ _id: { $in: req.body.courseId } })
          .then(() => res.redirect('back'))
          .catch(next)
        break

      case 'restore':
        Course.restore({ _id: { $in: req.body.courseId } })
          .then(() => res.redirect('back'))
          .catch(next)
        break

      case 'delete-force':
        Course.deleteOne({ _id: { $in: req.body.courseId } })
          .then(() => res.redirect('back'))
          .catch(next)
        break
      default:
        res.json({ message: 'Invalid action' })
    }
  }
}

module.exports = new CourseController()
