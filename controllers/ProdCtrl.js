const Prod = require('../models/prod')

function insertProd(req, res) {
  var prod = new Prod({
    nombre: req.body.nombre,
    precio: req.body.precio
  })
  prod.save().then(
    function (us) {
      res.send(us)
    },
    function (err) {
      res.send(err)
    }
  )
}

function getAll(req, res) {
  Prod.find({}, function (err, prods) {
    if (!err) {
        //res.send(prods)
        res.send(prods)
    } else {
        res.send(err)
    }
  })
}

function getByName(req, res) {
  Prod.find({nombre:{$regex:req.params.nombre}},function (err, prods) {
    if (!err) {
      res.send(prods)
    } else {
      res.send(err)
    }
  })
}

function update(req, res) {
  Prod.findOne({nombre:req.params.nombre},function (err, prod) {
    if (err) {
        res.send(err)
    } else {
      prod.nombre = req.body.nombre
      prod.precio = req.body.precio
      prod.save(function (err) {
        if (err) {
          res.send(err)
        } else {
          res.send({mensaje:"Se guardo la informacion"})
        }
      })
    }
  })
}

function deleteByID (req, res) {
  Prod.findOneAndRemove({_id:req.params.id}, function (err) {
    if (err) {
        res.send(err)
    } else {
        res.send({mensaje:"Objeto eliminado"})
    }
})
}

module.exports = {
  insertProd,
  getAll,
  getByName,
  update,
  deleteByID
}