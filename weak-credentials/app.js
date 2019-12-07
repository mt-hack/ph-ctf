const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.NJSPORT || 2222
app.use('/images', express.static('images'))
app.use(morgan('combined'))
require('./routes')(app)
app.listen(port, () => { console.log(`Weak Credentials demo is listening on ${port}.`) })
