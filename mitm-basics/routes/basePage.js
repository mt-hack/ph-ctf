module.exports = (app, listener) => {
  const ejs = require('ejs')
  var route; var routes = []

  app._router.stack.forEach(function (middleware) {
    if (middleware.route) { // routes registered directly on the app
      routes.push(middleware.route)
    } else if (middleware.name === 'router') { // router middleware
      middleware.handle.stack.forEach(function (handler) {
        route = handler.route
        route && routes.push(route)
      })
    }
  })

  app.get('/', (req, res) => {
    const joinedRoutes = routes.map(r => `<li><a href='http://${req.hostname}:${listener.address().port}${r.path}'>${r.path}</a></li>`).join('<br/>')
    res.send(ejs.render('<b>List of challenges hosted on this instance</b><br/><%- routes %>', { routes: joinedRoutes }))
  })
}
