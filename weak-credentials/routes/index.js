module.exports = (app) => {
  const bodyParser = require('body-parser')
  var urlencodedParser = bodyParser.urlencoded({ extended: false })
  app.set('view engine', 'ejs')
  app.route('/login')
    .get((req, res) => { res.render('login') })
    .post(urlencodedParser, (req, res) => {
      if (req.body.username === 'admin' && req.body.password === 'admin') {
        res.send('ye')
      } else {
        res.send('no')
      }
    })
}
