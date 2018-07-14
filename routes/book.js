const express = require('express')
const bookCtrl = require('../controllers/bookCtrl')
const api = express.Router()
const auth = require('../middlewares/auth')

api.post('/register-book', bookCtrl.insertBook)
api.get('/get-books', bookCtrl.getAll)
api.get('/get-by-name/:name', bookCtrl.getByName)
api.put('/update/:name', bookCtrl.update)
api.delete('/delete/:id', bookCtrl.deleteByID)
api.get('/private', auth, (req, res) => {
  res.status(200).send({message: 'Autorización correcta.'})
})

module.exports = api
