const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  login: {
    type: String,
    unique: true,
  },
  password: String,
})

const User = mongoose.model("User", userSchema)

module.exports = User
