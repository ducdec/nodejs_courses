const coursesRouter = require('./courses')
const page2Router = require('./page2')
const siteRouter = require('./site')

function route(app) {
  // app.get('/page2', (req, res) => {
  //   res.render('page2')
  // })
  app.use('/courses', coursesRouter)
  app.use('/page2', page2Router)

  app.use('/', siteRouter)
}

module.exports = route
