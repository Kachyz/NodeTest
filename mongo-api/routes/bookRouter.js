const express = require ("express")
const bookRouter = express.Router()

// Importamos nuestro model
var BookModel = require('../models/bookModel')

bookRouter.get('/', (req, res) => {
  BookModel.find({}, (err, result) => {
    if(err != null){
      console.log('Error en GET book', err);
      res.status(500).send('Internal error')
    }
    res.json(result)
  })
})

bookRouter.post('/', (req, res) => {
  let tmpBook = req.body
  let newBook = new BookModel(tmpBook)
  newBook.save()
  res.status(201).send(newBook)
})

bookRouter.get('/:bookId', (req, res) => {
  let bookId = req.params.bookId
  BookModel.findById(bookId, (err, result) => {
    if (err != null) {
      res.status(404).send(`Libro con el ID ${bookId} no existe :(`)
    }
    res.json(result)
  })
})

bookRouter.put('/:bookId', (req, res) => {
  let bookId = req.params.bookId
  BookModel.findById(bookId, (err, result) => {
    if (err != null) {
      res.status(404).send(`Libro con el ID ${bookId} no existe :(`)
    }
    result.title = req.body.title
    result.desc = req.body.desc
    result.image = req.body.image
    result.save()
    res.status(201).send(result)
  })
})

bookRouter.delete('/:bookId', (req, res) => {
  let bookId = req.params.bookId
  BookModel.findById(bookId, (err, result) => {
    if (err != null || result == null) {
      res.status(404).send(`Libro con el ID ${bookId} no existe :(`)
    } else {
      result.remove( err => {
        if (err)
          res.status(500).send(err)
        else
          res.status(200).send(`Libro con ID ${bookId} eliminado`)
      })
    }
  })
})

module.exports=bookRouter