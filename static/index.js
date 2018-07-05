var express = require("express")
var bodyParser = require("body-parser")
var app = express()
var fs = require("fs")

app.use(bodyParser.json())

var users = []

fs.readFile("./user.json", {encoding: "utf8"},  (err,data) => {
  users = JSON.parse(data).users
});

var server = app.listen(process.env.PORT, () => {
  console.log("Estamos corriendo en el puerto " + server.address().port);
})

// Muesta todos los usuarios en el arreglo
app.use('/users', (req, res) => {
  res.send(users)
})

app.post('/user', (req, res) => {
  const user = req.body.user //Recibimos un 'user' con el metodo post

  if('username' in user && user.username !== ''){
    if('email' in user && user.email !== ''){
      users.push(user)
      res.send(user)
    } else 
      res.status(400).send('invalid email field')
  } else
    res.status(400).send('invalid username field')

})

// Muestra info de solo un usuario
app.use('/:username', (req, res) => {
  let username = req.params.username
  let results = users.filter( user => user.username === username)
  results.length ? res.send(results) : res.status(404)
})

// Muestra el current data del server
app.use('/', (req, res) => {
  res.send(new Date())
})