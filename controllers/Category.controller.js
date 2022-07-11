const Category = require("../models/Category.model")

module.exports.categoryController = {
  getCategory: async (req, res) => {
    try {
      const category = await Category.find()
      res.json(category)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на получение" })
    }
  },

  postCategory: async (req, res) => {
    try {
      const category = await Category.create(req.body)
      res.json(category)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на сервер" })
    }
  },

  removeCategoryById: async (req, res) => {
    try {
      const category = await Category.findByIdAndRemove(req.params.id)
      res.json(category)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на удаление" })
    }
  },

  patchCategoryById: async (req, res) => {
    try {
      const category = await Category.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
      })
      res.json(category)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на изменение" })
    }
  },
}
