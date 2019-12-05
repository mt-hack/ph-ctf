const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const port = process.env.NJSPORT || 10000
app.use(morgan('combined'))
app.get('/public', (req, res) => {
  const pathQuery = req.query.file
  if (!pathQuery) {
    res.redirect('/public/?file=README.md')
  } else {
    const filePath = path.resolve(`${__dirname}/${pathQuery}`)
    res.sendFile(filePath, { dotfiles: 'allow' })
  }
})
app.get('/robots.txt', (req, res) => {
  res.sendFile('robots.txt', { root: __dirname })
})
app.listen(port, () => { console.log(`Directory traversal demo up @ ${port}.`) })
