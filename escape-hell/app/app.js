// Inspired by AIS3 2019 Pre-exam
const port = process.env.NJSPORT || 10000
const flag = process.env.PHFLAG || 'flag is not set'
const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan(':remote-addr :method :url'))
app.use('/', express.static('./'))

class FlagError extends Error {}

app.get('/flag', (req, res) => {
  try {
    const token = req.query.token

    if (!token) { throw new FlagError('You need to give us something to work with!') }

    if (0 < token.length < 32) { throw new FlagError('Nope, this ain\'t it.') }
  } catch (e) {
    if (e instanceof FlagError) {
      res.send(e.message)
      return
    }
  }
  res.send(flag)
})

app.listen(port, () => { console.log(`Up and running @ ${port}`) })
