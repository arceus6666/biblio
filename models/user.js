const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

var userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
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

userSchema.pre('save', (next) => {
  var user = this
  if (!user.isModified('password')) return next()
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next()
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next()
      user.password = hash
      next()
    })
  })
})

userSchema.methods.gravatar = () => {
  if (!this.email) return 'https://gravatar.com/avatar/?s=200&d=retro'
  const md5 = crypto.createHash('md5').update(this.email.digest('hex'))
  return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

var User = mongoose.model('User', userSchema)

module.exports = User
