const mongoose = require('mongoose')
const Schema = mongoose.Schema

var crud_schema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String
  },
  edad: {
    type: Number,
    required: true
  }
})

var Crud = mongoose.model('Crud', crud_schema)

module.exports = Crud