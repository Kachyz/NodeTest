var mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookModel = new Schema({
  "title": {type: String},
  "desc": {type: String},
  "image": {type: String}
})

module.exports = mongoose.model("books", bookModel)