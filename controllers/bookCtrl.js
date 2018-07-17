const Book = require('../models/book')

function insertBook (req, res) {
  var book = new Book({
    name: req.body.name,
    author: req.body.author,
    edition: req.body.edition,
    publishing: req.body.publishing,
    editorial: req.body.editorial,
    dateBorrowed: req.body.dateBorrowed,
    borrowed: req.body.borrowed,
    borrowerID: req.body.borrowerID,
    onDate: req.body.onDate
  })
  book.save().then(
    (us) => {
      res.send(us)
    },
    (err) => {
      res.send(err)
    }
  )
}

function getAll (req, res) {
  Book.find({}, (err, books) => {
    if (!err) {
      res.status(200).send(books)
    } else {
      res.status(500).send(err)
    }
  })
}

function getByName (req, res) {
  Book.find({nombre: {$regex: req.params.name}}, (err, books) => {
    if (!err) {
      res.status(200).send(books)
    } else {
      res.status(500).send(err)
    }
  })
}

function update (req, res) {
  Book.findOne({nombre: req.params.name}, (err, book) => {
    if (err) {
      res.send(err)
    } else {
      book.name = req.params.name
      book.author = req.body.author
      book.edition = req.body.edition
      book.publishing = req.body.publishing
      book.editorial = req.body.editorial
      book.dateBorrowed = req.body.dateBorrowed
      book.borrowed = req.body.borrowed
      book.borrowerID = req.body.borrowerID
      book.onDate = req.body.onDate
      book.save((err) => {
        if (err) {
          res.status(500).send(err)
        } else {
          res.status(200).send({mensaje: 'Se guardó la informacion'})
        }
      })
    }
  })
}

function deleteByID (req, res) {
  Book.findOneAndRemove({_id: req.params.id}, (err) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send({mensaje: 'Objeto eliminado'})
    }
  })
}

module.exports = {
  insertBook,
  getAll,
  getByName,
  update,
  deleteByID
}
