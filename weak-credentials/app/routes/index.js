module.exports = (app) => {
  const bodyParser = require('body-parser')
  var urlencodedParser = bodyParser.urlencoded({ extended: false })
  app.set('view engine', 'ejs')
  app.route('/')
    .get((req, res) => { res.render('index') })
  app.route('/login')
    .get((req, res) => { res.render('login') })
    .post(urlencodedParser, (req, res) => {
      if (req.body.username === 'admin' && req.body.password === 'admi000') {
        res.render('login', { failed: false, nonce: res.locals.nonce })
      } else {
        res.render('login', { failed: true, nonce: res.locals.nonce })
      }
    })
}
