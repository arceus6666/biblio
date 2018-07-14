const express = require('express')
const crudCtrl = require('../controllers/CrudCtrl')
const api = express.Router()
const auth = require('../middlewares/auth')
const userCtrl = require('../controllers/userCtrl')

api.post("/registrar", crudCtrl.insertCrud)
api.get("/get-all", crudCtrl.getAll)
api.get("/get-by-name/:nombre", crudCtrl.getByName)
api.put("/actualizar/:nombre", crudCtrl.update)
api.delete("/eliminar/:id", crudCtrl.deleteByID)
api.get('/private',auth, function(req, res) {
  res.status(200).send({message: 'Autorización correcta.'})
})

api.post('/login', userCtrl.signUp)

module.exports = api;