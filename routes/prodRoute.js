const express = require('express')
const prodCtrl = require('../controllers/ProdCtrl')
const api = express.Router()

api.post("/registrar-prod", prodCtrl.insertProd)
api.get("/get-all-prod", prodCtrl.getAll)
api.get("/get-by-name-prod/:nombre", prodCtrl.getByName)
api.put("/actualizar-prod/:nombre", prodCtrl.update)
api.delete("/eliminar-prod/:id", prodCtrl.deleteByID)

module.exports = api;