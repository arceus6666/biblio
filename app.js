const express = require('express')
const bodyParser = require('body-parser')
// si el archivo es index no necesita ser nombrado
const api = require('./routes')
const prodApi = require('./routes/prodRoute')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/personas', api)
app.use('/productos', prodApi)

app.get('/', function (req, res) {
  res.status(200).send('Todo correcto')
})

module.exports = app
