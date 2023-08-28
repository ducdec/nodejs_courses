const Course = require('../models/Course')

class Page2Controller {
  // [GET] /page2
  page2(req, res) {
    res.render('page2')
  }

  //[GET] /page2/:slug
  show(req, res) {
    res.send('Hello World!')
  }
}

module.exports = new Page2Controller()
