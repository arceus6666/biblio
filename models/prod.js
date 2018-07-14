const mongoose = require('mongoose')
const Schema = mongoose.Schema

var prod_schema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  }
})

var Prod = mongoose.model('Prod', prod_schema)

module.exports = Prod