const express = require('express')
const morgan = require('morgan')
const app = module.exports = express()
const port = process.env.NJSPORT || 2222
// Configure Express
app.set('view engine', 'ejs')
app.use('/images', express.static('images'))
app.use(morgan('combined'))
// Configure helmet for XSS prevention
require('./configs/helmet')
// Configure routes
const routes = require('./routes/index')
app.use('/', routes)
const registerRoutes = require('./routes/register')
app.use('/register', registerRoutes)
const loginRoutes = require('./routes/login')
app.use('/login', loginRoutes)
// Configure database sync
require('./models')

app.listen(port, () => { console.log(`Weak Credentials demo is listening on ${port}.`) })
