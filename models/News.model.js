const mongoose = require("mongoose")

const newsSchema = mongoose.Schema({
  images: String,
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
  like: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
})

const News = mongoose.model("News", newsSchema)

module.exports = News
