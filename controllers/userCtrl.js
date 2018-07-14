const User = require('../models/user')
const service = require('../services')

function signUp (req, res) {
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    lastName: req.body.lastName,
    age: req.body.age,
    password: req.body.password
  })

  user.save((err) => {
    if (err) {
      res.status(500).send({message: err})
    } else {
      res.status(200).send({token: service.createToken(user)})
    }
  })
}

module.exports = {
  signUp
}
