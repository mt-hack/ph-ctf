process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
process.env.http_proxy = 'http://127.0.0.1:8888'

const express = require('express')
const app = express()
const port = 4015

const listener = app.listen(port, () => {
  console.log(`Up and running @ ${port}!`)
})

require('./intervalLoop')(port)
require('./routes/ctf')(app)
require('./routes/basePage')(app, listener)
