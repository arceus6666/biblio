const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

var user_schema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  displayName: String,
  avatar: String,
  password: {
    type: String,
    select: false
  },
  signupDate: {
    type: Date,
    default: Date.now()
  },
  lastLogin: Date
})

user_schema.pre('save', function(next) {
  var user = this
  if (!user.isModified('password')) return next()
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next()
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next()
      user.password = hash
      next()
    })
  })
})

user_schema.methods.gravatar = function () {
  if (!this.email) return 'https://gravatar.com/avatar/?s=200&d=retro'
  const md5 = crypto.createHash('md5').update(this.email.digest('hex'))
  return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

var User = mongoose.model('User', user_schema)

module.exports = User