const express = require('express')
const bodyParser = require('body-parser')
// si el archivo es index no necesita ser nombrado
const bookApi = require('./routes/book')
const userApi = require('./routes/user')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/book', bookApi)
app.use('/user', userApi)
// app.use('/user', userApi)

app.get('/', (req, res) => {
  res.status(200).send('Todo correcto')
})

module.exports = app
