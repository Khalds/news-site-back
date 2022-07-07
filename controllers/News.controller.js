const News = require("../models/News.model")

module.exports.newsController = {
  getNews: async (req, res) => {
    try {
      const allNews = await News.find()

      res.json(allNews)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на получение" })
    }
  },

  postNews: async (req, res) => {
    try {
      const news = await News.create({
        img: req.body.img,
        title: req.body.title,
        text: req.body.text,
        category: req.category.id,
        author: req.author.id,
        comment: req.comment.id,
      })
      res.json(news)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на сервер" })
    }
  },

  removeNewsById: async (req, res) => {
    try {
      const news = await News.findByIdAndRemove(req.params.id)
      res.json(news)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на удаление" })
    }
  },

  patchNewsById: async (req, res) => {
    try {
      const news = await News.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        text: req.body.text,
        category: req.category.id,
      })
      res.json(news)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на изменение" })
    }
  },
}