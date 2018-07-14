const Crud = require('../models/crud')

function insertCrud(req, res) {
  var crud = new Crud({
    nombre: req.body.nombre,
    apellido: req.body.last_name,
    edad: req.body.age
  })
  crud.save().then(
    function (us) {
      res.send(us)
    },
    function (err) {
      res.send(err)
    }
  )
}

function getAll(req, res) {
  Crud.find({}, function (err, cruds) {
    if (!err) {
        res.send(cruds)
    } else {
        res.send(err)
    }
  })
}

function getByName(req, res) {
  Crud.find({nombre:{$regex:req.params.nombre}},function (err, cruds) {
    if(!err){
        res.send(cruds)
    }else{
        res.send(err)
    }
  })
}

function update(req, res) {
  Crud.findOne({nombre:req.params.nombre},function (err, crud) {
    if (err) {
        res.send(err)
    } else {
      crud.nombre = req.body.nombre;
      crud.apellido = req.body.apellido;
      crud.edad = req.body.edad
      crud.save(function (err) {
        if(err){
          res.send(err)
        }else{
          res.send({mensaje:"Se guardo la informacion"})
        }
      })
    }
  })
}

function deleteByID (req, res) {
  Crud.findOneAndRemove({_id:req.params.id},function (err) {
    if(err){
        res.send(err)
    }else{
        res.send({mensaje:"Objeto eliminado"})
    }
})
}

module.exports = {
  insertCrud,
  getAll,
  getByName,
  update,
  deleteByID
}