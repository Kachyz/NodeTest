const express = require('express')
const bookRouter = require('./routes/bookRouter')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const db = mongoose.connect('mongodb://admin:123qwe@ds125831.mlab.com:25831/mongo-api-test') // TODO: generar BD y cambiar el connstr aqui

app.use(bodyParser.json())

app.use('/book', bookRouter)

app.listen(3000, () => {
  console.log(`Estamos corriendo en el puerto 3k`);
})