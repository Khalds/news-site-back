const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
  text: String,
  news: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "News",
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
})

const Comment = mongoose.model("Comment", commentSchema)
module.exports = Comment
