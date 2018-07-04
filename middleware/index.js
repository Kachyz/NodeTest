var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())

app.post('/body', (req, res) => {
  res.json({body: req.body.myBody})
})

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`)
})