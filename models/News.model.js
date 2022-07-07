const mongoose = require("mongoose")

const newsSchema = mongoose.Schema({
  img: String,
  title: String,
  text: String,
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  comment: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Comment",
    default: 0,
  },
  like: {
    type: Number,
    default: 0,
  },
})

const News = mongoose.model("News", newsSchema)

module.exports = News
