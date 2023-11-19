const Course = require('../models/Course')

class Page2Controller {
  // [GET] /page2
  page2(req, res) {
    res.render('page2')
  }

  //[GET] /page2/:slug
  show(req, res) {
    res.send('Welcome!!!')
  }

  //[GET] /page2/page2.1
  showHai(req, res) {
    res.render('pages/pageHai')
  }
}

module.exports = new Page2Controller()
