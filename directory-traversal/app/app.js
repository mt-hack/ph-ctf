const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const app = express()
const port = process.env.NJSPORT || 10000
app.use(morgan('combined'))
app.get('/', getFile)
app.use('/photos', express.static('photos'))
app.get('/robots.txt', (req, res) => {
  res.sendFile('robots.txt', { root: __dirname })
})
app.listen(port, () => { console.log(`Directory traversal demo up @ ${port}.`) })

function getFile (req, res) {
  const pathQuery = req.query.file
  if (!pathQuery) {
    res.redirect('/?file=README.md')
  } else {
    const filePath = path.resolve(`${__dirname}/${pathQuery}`)
    res.set('Content-Type', 'text/plain')
    res.send(fs.readFileSync(filePath))
  }
}
