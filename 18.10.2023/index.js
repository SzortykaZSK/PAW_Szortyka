const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log(__dirname)
  res.sendFile(path.join(__dirname, '/html/','index.html'))
})
app.get('/kontakt', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/kontakt.html'))
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})