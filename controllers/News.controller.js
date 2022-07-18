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

  getNewsById: async (req, res) => {
    try {
      const news = await News.findById(req.params.id)
      res.json(news)
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
        category: req.body.category,
        author: req.body.author,
      })
      res.json(news)
    } catch (e) {
      return res
        .status(401)
        .json({ error: "Ошибка при запросе на сервер" + e.message })
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

  patchNewsLikeById: async (req, res) => {
    try {
      const news = await News.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            like: req.body.like,
          },
        },
        { new: true }
      )
      console.log(news)
      res.json(news)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на изменение" })
    }
  },

  patchNewsDisLikeById: async (req, res) => {
    try {
      const news = await News.findByIdAndUpdate(
        req.params.id,
        {
          $pull: {
            like: req.body.like,
          },
        },
        { new: true }
      )
      console.log(news)
      res.json(news)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на изменение" })
    }
  },
}
