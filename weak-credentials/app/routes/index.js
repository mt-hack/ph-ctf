const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.get('/', (req, res) => { res.render('index') })
router.get('/login', (req, res) => { res.render('login') })
router.post('/login', urlencodedParser, (req, res) => {
  if (req.body.username === 'admin' && req.body.password === 'admi000') {
    res.render('login', { failed: false, nonce: res.locals.nonce })
  } else {
    res.render('login', { failed: true, nonce: res.locals.nonce })
  }
})

module.exports = router
