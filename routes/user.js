const express = require('express')
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middlewares/auth')
const api = express.Router()

api.post('/register-user', userCtrl.signUp)
api.get('/private', auth, (req, res) => {
  res.status(200).send({message: 'Autorización correcta.'})
})

module.exports = api
