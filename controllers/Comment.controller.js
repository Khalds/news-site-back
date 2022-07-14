const Comment = require("../models/Comment.model")

module.exports.commentController = {
  getComments: async (req, res) => {
    try {
      const comment = await Comment.find().populate("user")
      res.json(comment)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на получение" })
    }
  },

  getCommentById: async (req, res) => {
    try {
      const comment = await Comment.find({ news: req.params.id }).populate(
        "user"
      )
      res.json(comment)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на получение" })
    }
  },

  postComment: async (req, res) => {
    try {
      const comment = await Comment.create(req.body)
      res.json(comment)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на сервер" })
    }
  },

  removeCommentById: async (req, res) => {
    try {
      const comment = await Comment.findByIdAndRemove(req.params.id)
      res.json(comment)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на удаление" })
    }
  },

  patchCommentById: async (req, res) => {
    try {
      const comment = await Comment.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
      })
      res.json(comment)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на изменение" })
    }
  },
}
