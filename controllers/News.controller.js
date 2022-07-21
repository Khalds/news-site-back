const News = require("../models/News.model")

module.exports.newsController = {
  getNews: async (req, res) => {
    try {
      const allNews = await News.find({ approved: true })
      const approvedNews = await News.find({ approved: false })

      res.json({ allNews, approvedNews })
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
      const { title, text, category, author } = req.body

      const news = await News.create({
        images: req.file.path,
        title,
        text,
        category,
        author,
      })
      res.json(news)
    } catch (e) {
      return res
        .status(401)
        .json({ error: "Ошибка при запросе на сервер " + e.message })
    }
  },

  removeNewsById: async (req, res) => {
    const { id } = req.params

    try {
      const news = await News.findById(id)

      await news.remove()

      return res.json("News was deleted")
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
      res.json(news)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на изменение" })
    }
  },

  patchNewsApproved: async (req, res) => {
    try {
      const news = await News.findByIdAndUpdate(
        req.params.id,
        { approved: req.body.approved },
        { new: true }
      )
      res.json(news)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на изменение" })
    }
  },
}
